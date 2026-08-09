import { ConfigService } from '@nestjs/config';
export declare class QuietHoursService {
    private readonly quietStart;
    private readonly quietEnd;
    private readonly timezone;
    constructor(config: ConfigService);
    isQuietHours(): boolean;
    getNextSendTime(): Date;
}
