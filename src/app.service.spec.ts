import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it('should return "Hello World!"', () => {
    const result = appService.getHello();
    expect(result).toBe('Hello World!');
  });

  it('should return "Goodbye World!"', () => {
    const result = appService.getGoodbye();
    expect(result).toBe('Goodbye World!');
  });
});
