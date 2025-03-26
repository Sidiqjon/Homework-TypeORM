import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, Min, Max } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'Atomic Habits', description: 'Book name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 2024, description: 'Publication year' })
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear()) 
  year: number;

  @ApiProperty({ example: 20, description: 'Book price' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 1, description: 'Author ID' })
  @IsInt()
  @Min(1)
  authorId: number;
}
