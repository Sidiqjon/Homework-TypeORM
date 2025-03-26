import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Book } from '../entities/book-entity';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly booksService: BookService) {}

  @Post()
  @ApiOperation({ summary: 'Create a book' })
  @ApiResponse({ status: 201, type: Book })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({ status: 200, type: [Book] })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one book by ID' })
  @ApiResponse({ status: 200, type: Book })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a book' })
  @ApiResponse({ status: 200, type: Book })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a book' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
