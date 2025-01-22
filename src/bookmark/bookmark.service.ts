import { Injectable } from '@nestjs/common';
import { Bookmark } from '@prisma/client';
@Injectable()
export class BookmarkService {
  getBookmark() {
    return {
      message: 'book mark',
    };
  }
}
