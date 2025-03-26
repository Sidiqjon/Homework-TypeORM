import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiPropertyOptional({ example: 'Updated Book Title', description: 'Updated book name' })
  name?: string;

  @ApiPropertyOptional({ example: 2025, description: 'Updated publication year' })
  year?: number;

  @ApiPropertyOptional({ example: 25.99, description: 'Updated book price' })
  price?: number;

  @ApiPropertyOptional({ example: 2, description: 'Updated Author ID' })
  authorId?: number;
}