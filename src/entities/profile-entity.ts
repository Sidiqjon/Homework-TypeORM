import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author-entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  img: string;

  @Column()
  bio: string;

  @OneToOne(() => Author, (author) => author.profile)
  author: Author;
}
