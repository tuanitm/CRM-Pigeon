import {
  IsString,
  IsOptional,
  IsObject,
  IsArray,
  ValidateNested,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class EventDto {
  @ApiProperty({ description: 'Event type from the event dictionary' })
  @IsString()
  eventType!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  customerId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  anonymousId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  properties?: Record<string, any>;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  context?: Record<string, any>;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  idempotencyKey?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  occurredAt?: string;
}

export class BatchEventsDto {
  @ApiProperty({ type: [EventDto], maxItems: 100 })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventDto)
  events!: EventDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  source?: string;
}
