import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @ApiPropertyOptional({ example: 'updated@example.com', description: 'Updated email' })
    email?: string;
  
    @ApiPropertyOptional({ example: 'newpassword', description: 'Updated password' })
    password?: string;
  
    @ApiPropertyOptional({ example: 'https://example.com/new-avatar.jpg', description: 'Updated profile image URL' })
    img?: string;
  
    @ApiPropertyOptional({ example: 'Updated bio description.', description: 'Updated bio' })
    bio?: string;
  
    @ApiPropertyOptional({ example: 2, description: 'Updated Author ID' })
    authorId?: number;
  }
  