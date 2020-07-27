import {Controller, Get, Post, Req, Delete, Put} from '@nestjs/common';
import {Request} from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {


    constructor(private readonly productsService: ProductsService) {

    }

    @Get()
    index(): unknown {
        return this.productsService.findAll()
    }

    @Post()
    store(@Req() request: Request) {
        return this.productsService.create(request.body)
    }

    @Put(':id')
    update(@Req() request: Request) {
        return this.productsService.update(request.body)
    }

    @Get(':id')
    show(@Req() request: Request) {
        return this.productsService.findOne(request.params['id'])
    }

    @Delete(':id')
    remove(@Req() request: Request) {
        return this.productsService.remove(request.params['id'])
    }
}
