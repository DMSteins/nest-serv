import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdDate: Date

    @CreateDateColumn()
    updatedDate: Date

    @CreateDateColumn()
    deletedDate: Date
}