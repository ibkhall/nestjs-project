import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { UsersModule } from './users/users.module';
import {User} from "./users/user.entity";
import { CategoriesModule } from './categories/categories.module';
import {Category} from "./categories/category.entity";
import { TagsModule } from './tags/tags.module';
import {Tag} from "./tags/tag.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'khall',
    password: 'khall',
    database: 'nestjs',
    entities: [Product, User, Category, Tag],
    synchronize: true,
    autoLoadEntities: true,
  }),
  ProductsModule,
  UsersModule,
  CategoriesModule,
  TagsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
