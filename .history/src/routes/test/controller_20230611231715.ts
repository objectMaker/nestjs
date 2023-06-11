import { Controller, Get } from '@nestjs/common';
@Controller('/test')
export class TestController {
  @Get()
  getTest(): string {
    return '我是test的数据';
  }
}
