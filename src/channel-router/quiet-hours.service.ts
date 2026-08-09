import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/** SRS: Quiet hours 21:00–07:00 VN time. Messages deferred to 07:05 next day. */
@Injectable()
export class QuietHoursService {
  private readonly quietStart: number;
  private readonly quietEnd: number;
  private readonly timezone: string;

  constructor(config: ConfigService) {
    this.quietStart = config.get<number>('QUIET_HOUR_START', 21);
    this.quietEnd = config.get<number>('QUIET_HOUR_END', 7);
    this.timezone = config.get<string>('TIMEZONE', 'Asia/Ho_Chi_Minh');
  }

  isQuietHours(): boolean {
    const now = new Date();
    const vnHour = parseInt(
      now.toLocaleString('en-US', { timeZone: this.timezone, hour: 'numeric', hour12: false }),
    );
    // Quiet: 21:00-23:59 or 00:00-06:59
    return vnHour >= this.quietStart || vnHour < this.quietEnd;
  }

  getNextSendTime(): Date {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Set to 07:05 VN time (UTC+7 = 00:05 UTC)
    tomorrow.setUTCHours(0, 5, 0, 0);
    return tomorrow;
  }
}
