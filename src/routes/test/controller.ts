import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTestDto } from './test.dto';
import { TestService } from './test.service';
@Controller('/test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get()
  getTest(): string {
    return '我是test的数据';
  }
  @Post()
  async dd(@Body() data: CreateTestDto) {
    console.log(data, 'data');
    return await this.testService.create(data);
  }
  @Delete(':id')
  del(@Param('id') id: string): string {
    console.log(id, 'id');
    return id;
  }
}
