import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile-entity';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const profile = this.profilesRepository.create(createProfileDto);
    return this.profilesRepository.save(profile);
  }

  async findAll(): Promise<Profile[]> {
    return this.profilesRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Profile | null> {
    return this.profilesRepository.findOne({ where: { id }, relations: ['author'] });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto): Promise<Profile | null> {
    await this.profilesRepository.update(id, updateProfileDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.profilesRepository.delete(id);
  }
}