import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/entities/employee.entity';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule { }
