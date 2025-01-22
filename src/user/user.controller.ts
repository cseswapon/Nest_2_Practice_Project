import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}
  @Get('fuck')
  func() {
    return { message: 'fuck' };
  }
}
