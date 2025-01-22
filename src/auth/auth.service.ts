import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(data: AuthDto) {
    console.log(data);
    return {
      message: 'signup',
      data,
    };
  }
  signin(data: AuthDto) {
    console.log(data);
    return {
      message: 'signup',
      data,
    };
  }
}
