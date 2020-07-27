import { Injectable } from '@nestjs/common';
import {Tag} from "./tag.entity";

@Injectable()
export class TagsService {


    findAll(): Promise<Tag[]> {
        return Tag.find()
    }


    async create(name: string): Promise<Tag> {
        const tag: Tag = new Tag();
        tag.name = name
        await tag.save()

        return tag
    }
}
