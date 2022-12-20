import { IsAlphanumeric, IsEmail, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
	@IsAlphanumeric()
	@MaxLength(14)
	username: string;

	@IsString()
	password: string;

	@IsEmail()
	email: string;
}
