import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('/bookmark')
export class BookController {
  constructor(private bookmark: BookmarkService) {}
  @Get('/')
  getbookmark() {
    return this.bookmark.getBookmark();
  }
}
