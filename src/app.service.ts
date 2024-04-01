import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    if ('a' == 'a') {
      console.log('a is a');
    }
    return 'Goodbye World!';
  }
}
