import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "../../../common/entities/base.entity";

@Entity()
export class User extends BaseEntity {
	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	avatar: string;

	@Column()
	username: string;

	@Column()
	password: string;

	@Column('int', { default: 1 })
	is_admin: number;
}
