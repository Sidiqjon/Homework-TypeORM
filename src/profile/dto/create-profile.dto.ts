import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUrl, IsInt, Min } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ example: 'user@example.com', description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secretpassword', description: 'User password' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'https://example.com/avatar.jpg', description: 'Profile image URL' })
  @IsUrl()
  img: string;

  @ApiProperty({ example: 'This is a bio.', description: 'User bio' })
  @IsString()
  bio: string;

  @ApiProperty({ example: 1, description: 'Author ID' })
  @IsInt()
  @Min(1)
  authorId: number;
}
