
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne,ManyToMany,JoinTable } from 'typeorm';
import {Category} from "../categories/category.entity";
import {Tag} from "../tags/tag.entity";

@Entity()
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @Column()
  content: string;

  @ManyToOne(type => Category, category => category.products)
  category: Category;


  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[];
}