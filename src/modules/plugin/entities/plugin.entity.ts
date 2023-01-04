import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import BaseEntity from "../../../common/entities/base.entity";
import { Version } from "../../version/entities/version.entity";

@Entity()
export class Plugin extends BaseEntity {
	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	author: string;


	@OneToOne(() => Version)
	@JoinColumn()
	version: Version;

	@Column()
	path: string;

	@Column()
	logo: string;
}
