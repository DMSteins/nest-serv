import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import BaseEntity from "../../../common/entities/base.entity";

@Entity()
export class Version extends BaseEntity {
	@Column()
	name: string;

	@Column()
	notes: string;

	@Column()
	path: string;

	@Column()
	version: string;

	@Column()
	plugin_id: string;
}
