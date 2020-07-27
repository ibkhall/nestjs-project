import {Controller, Get, Post, Req} from '@nestjs/common';
import {CategoriesService} from "./categories.service";
import {Request} from "express";

@Controller('categories')
export class CategoriesController {


    constructor(private readonly categoriesService: CategoriesService){}

    @Get()
    index() {
        return this.categoriesService.findAll()
    }

    @Post()
    store(@Req() request: Request) {
        return this.categoriesService.create(request.body['name'])
    }
}
