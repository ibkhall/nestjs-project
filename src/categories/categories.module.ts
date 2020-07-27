import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./category.entity";
import { CategoriesService } from './categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [TypeOrmModule],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
