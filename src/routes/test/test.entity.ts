import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateTestDto } from './test.dto';

@Entity()
export class TestEntity {
  constructor(partial?: Partial<CreateTestDto>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;
}
