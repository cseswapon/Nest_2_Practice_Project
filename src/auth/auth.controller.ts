import { Controller, Get } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  constructor() {}
  @Get('/getauth')
  getauth() {
    return {
      status: 'OK',
      message: 'Auth Controller',
    };
  }
}
