import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { ProfileModule } from './profile/profile.module';
import { BookModule } from './book/book.module';
import { Author } from './entities/author-entity';
import { Book } from './entities/book-entity';
import { Profile } from './entities/profile-entity';

@Module({
  imports: [
    AuthorModule,
    ProfileModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432, 
      username: 'postgres', 
      password: '12345678', 
      database: 'homework_typeorm',
      entities: [Author, Book, Profile],
      synchronize: true, 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// // import { AppController } from './app.controller';
// // import { AppService } from './app.service';
// import { AuthorModule } from './author/author.module';
// import { ProfileModule } from './profile/profile.module';
// import { BookModule } from './book/book.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Author } from './entities/author-entity';
// import { Book } from './entities/book-entity';
// import { Profile } from './entities/profile-entity';

// @Module({
//   imports: [AuthorModule, ProfileModule, BookModule, 
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'yusuf777$',
//       database: 'homework_typeorm',
//       extra: {
//         authPlugin: 'caching_sha2_password', 
//       },
//       entities: [Author, Book, Profile],
//       // synchronize: true,
//     }),
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}