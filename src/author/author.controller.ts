
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Author } from '../entities/author-entity';

@ApiTags('authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorsService: AuthorService) {}

  @Post()
  @ApiOperation({ summary: 'Create an author' })
  @ApiResponse({ status: 201, type: Author })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all authors' })
  @ApiResponse({ status: 200, type: [Author] })
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one author by ID' })
  @ApiResponse({ status: 200, type: Author })
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an author' })
  @ApiResponse({ status: 200, type: Author })
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an author' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
