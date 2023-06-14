import { CreateTestDto } from './test.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly eventsRepository: Repository<TestEntity>,
  ) {}

  create(data: CreateTestDto) {
    console.log(new TestEntity(data), 'newdata');
    this.eventsRepository.save(new TestEntity(data));
  }
}
