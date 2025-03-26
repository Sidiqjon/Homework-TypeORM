import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Profile } from '../entities/profile-entity';

@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {
  constructor(private readonly profilesService: ProfileService) {}

  @Post()
  @ApiOperation({ summary: 'Create a profile' })
  @ApiResponse({ status: 201, type: Profile })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all profiles' })
  @ApiResponse({ status: 200, type: [Profile] })
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one profile by ID' })
  @ApiResponse({ status: 200, type: Profile })
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a profile' })
  @ApiResponse({ status: 200, type: Profile })
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a profile' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
