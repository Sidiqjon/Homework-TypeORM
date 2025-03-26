import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
    @ApiProperty({ example: 'user@example.com', description: 'User email' })
    email: string;
  
    @ApiProperty({ example: 'secretpassword', description: 'User password' })
    password: string;
  
    @ApiProperty({ example: 'https://example.com/avatar.jpg', description: 'Profile image URL' })
    img: string;
  
    @ApiProperty({ example: 'This is a bio.', description: 'User bio' })
    bio: string;
  
    @ApiProperty({ example: 1, description: 'Author ID' })
    authorId: number;
  }
  