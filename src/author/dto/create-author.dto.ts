import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({ example: 'John Doe', description: 'Author name' })
  @IsString()
  @Length(2, 32)
  name: string;
}
