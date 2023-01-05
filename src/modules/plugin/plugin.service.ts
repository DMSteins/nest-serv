import { Injectable } from '@nestjs/common';
import { CreatePluginDto } from './dto/create-plugin.dto';
import { UpdatePluginDto } from './dto/update-plugin.dto';
import { Plugin } from './entities/plugin.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PluginService {
	constructor(
		@InjectRepository(Plugin)
		private repository: Repository<Plugin>,
	) {

	}
	create(createPluginDto: CreatePluginDto) {
		const { } = createPluginDto;

		const user = new Plugin();


		return this.repository.save(user);
	}

	findAll() {
		return this.repository.find();
	}

	findOne(id: number) {
		return this.repository.findOneBy({ id });
	}

	update(id: number, updateUserDto: UpdatePluginDto) {
		const { } = updateUserDto;

		return this.repository.update({ id }, {});
	}

	remove(id: number) {
		return this.repository.delete({
			id,
		});
	}
}
