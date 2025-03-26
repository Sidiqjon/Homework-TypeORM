import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author-entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    console.log(createAuthorDto);
    
    const author = this.authorsRepository.create(createAuthorDto);
    return this.authorsRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.authorsRepository.find({ relations: ['profile', 'books'] });
  }

  async findOne(id: number): Promise<Author | null> {
    return this.authorsRepository.findOne({ where: { id }, relations: ['profile', 'books'] });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author | null> {
    await this.authorsRepository.update(id, updateAuthorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.authorsRepository.delete(id);
  }
}