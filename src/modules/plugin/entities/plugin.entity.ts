import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "../../../common/entities/base.entity";

@Entity()
export class Plugin extends BaseEntity {
	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	author: string;

	@Column()
	version: string;

	@Column()
	path: string;

	@Column()
	logo: string;
}
