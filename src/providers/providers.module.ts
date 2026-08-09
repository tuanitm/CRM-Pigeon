import { Module } from '@nestjs/common';
import { ZnsProviderService } from './zns-provider.service';
import { EmailProviderService } from './email-provider.service';
import { SmsProviderService } from './sms-provider.service';

@Module({
  providers: [ZnsProviderService, EmailProviderService, SmsProviderService],
  exports: [ZnsProviderService, EmailProviderService, SmsProviderService],
})
export class ProvidersModule {}
