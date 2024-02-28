import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    const foo: string = null;
    return 'Goodbye World!' + foo;
  }
}
