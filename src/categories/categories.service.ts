import { Injectable } from '@nestjs/common';
import {Category} from "./category.entity";

@Injectable()
export class CategoriesService {

    findAll(): Promise<Category[]> {
        return Category.find()
    }


    create(name: string): Category {
        const category: Category = new Category();
        category.name = name
        category.save()

        return category
    }
}
