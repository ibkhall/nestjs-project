import {Controller, Get, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {TagsService} from "./tags.service";

@Controller('tags')
export class TagsController {


    constructor(private readonly tagsService: TagsService){}

    @Get()
    index() {
        return this.tagsService.findAll()
    }

    @Post()
    store(@Req() request: Request) {
        return this.tagsService.create(request.body['name'])
    }
}
