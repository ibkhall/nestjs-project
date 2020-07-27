import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";
import {Request} from "express";

@Injectable()
export class UsersService {

    findAll(): Promise<User[]> {

        return User.find()
    }


    create(body: any): User {
        const user = new User()
        user.name = body.name
        user.save()
        return user
    }


    findOne(id: string): Promise<User> {
        return User.findOne(id)
    }

    remove(id: string) {
        return User.delete(id)
    }
}
