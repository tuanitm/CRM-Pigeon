import { IsString, IsOptional, IsObject, IsEmail, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IdentifyDto {
  @ApiProperty({ description: 'Phone number in E.164 format (primary key)' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  anonymousId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsObject()
  traits?: Record<string, any>;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  idempotencyKey?: string;

  @ApiProperty({ required: false, description: 'Optional array of children profiles' })
  @IsOptional()
  @IsArray()
  babies?: Array<{ name: string; dateOfBirth: string; gender: string; stageCode?: string }>;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  userAgent?: string;
}
