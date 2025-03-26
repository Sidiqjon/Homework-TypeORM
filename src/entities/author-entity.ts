import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Profile } from './profile-entity';
import { Book } from './book-entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  name: string;

  @OneToOne(() => Profile, (profile) => profile.author)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}