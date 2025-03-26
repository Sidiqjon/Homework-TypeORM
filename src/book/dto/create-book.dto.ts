import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @ApiProperty({ example: 'Atomic Habits', description: 'Book name' })
    name: string;
  
    @ApiProperty({ example: 2024, description: 'Publication year' })
    year: number;
  
    @ApiProperty({ example: 19.99, description: 'Book price' })
    price: number;
  
    @ApiProperty({ example: 1, description: 'Author ID' })
    authorId: number;
  }