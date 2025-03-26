import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'John Doe', description: 'Author name' })
  name: string;
}
