import { IsOptional, IsString } from 'class-validator';

export class RedirectFinishQueryDTO {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  scope?: string;

  @IsOptional()
  @IsString()
  error?: string;

  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  authuser?: string;

  @IsOptional()
  @IsString()
  hd?: string;

  @IsOptional()
  @IsString()
  prompt?: string;
}
