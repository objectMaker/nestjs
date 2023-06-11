import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestReq } from '.';
@Controller('/test')
export class TestController {
  @Get()
  getTest(): string {
    return '我是test的数据';
  }
  @Post()
  dd(@Body() id: TestReq) {
    return id;
  }
  @Delete(':id')
  del(@Param('id') id: string): string {
    console.log(id, 'id');
    return id;
  }
}
