import { Module } from '@nestjs/common';
import { IdentityResolverService } from './identity-resolver.service';

@Module({
  providers: [IdentityResolverService],
  exports: [IdentityResolverService],
})
export class IdentityModule {}
