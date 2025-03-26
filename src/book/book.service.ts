import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book-entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Book | null> {
    return this.booksRepository.findOne({ where: { id }, relations: ['author'] });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book | null> {
    await this.booksRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}