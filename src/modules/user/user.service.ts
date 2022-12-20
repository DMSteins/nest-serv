import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) { }
	async create(createUserDto: CreateUserDto) {
		const { username, password, email } = createUserDto;

		const user = new User();
		user.username = username;
		user.password = password;
		user.email = email;

		return this.usersRepository.save(user);
	}

	findAll() {
		return this.usersRepository.find();;
	}

	findOne(id: number) {
		return this.usersRepository.findOneBy({ id });
	}
	async findByUsername(username: string) {
		return this.usersRepository.findOneBy({ username });
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		const { username, password, email } = updateUserDto;

		return this.usersRepository.update({ id }, { username, password, email });
	}

	remove(id: number) {
		return this.usersRepository.delete({
			id,
		});
	}

	async checkAdmin(id: number) {
		return this.usersRepository.findOne({
			where: { id, is_admin: 1 },
		});
	}
}
