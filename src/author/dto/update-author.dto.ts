import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  @ApiPropertyOptional({ example: 'Updated Name', description: 'Updated author name' })
  name?: string;
}
