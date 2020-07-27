import {Controller, Delete, Get, Post, Req} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Request} from "express";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}


    @Get()
    index() {
        return this.usersService.findAll()
    }

    @Post()
    store(@Req() request: Request) {
        return this.usersService.create(request.body)
    }

    @Get(':id')
    show(@Req() request: Request) {
        return this.usersService.findOne(request.params['id'])
    }

    @Delete(':id')
    remove(@Req() request: Request) {
        return this.usersService.remove(request.params['id'])
    }
}
