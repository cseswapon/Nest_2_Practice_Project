import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookController } from './bookmar.controller';

@Module({
  controllers: [BookController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
