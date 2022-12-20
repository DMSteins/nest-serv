import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import loadConfig from './config/configurations';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { PluginModule } from './modules/plugin/plugin.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

const businessModules = [
	AuthModule,
	PluginModule,
	UserModule,
];

const libModules = [
	ConfigModule.forRoot({
		isGlobal: true,
		load: [loadConfig],
		envFilePath: ['.env'],
	}),
	ScheduleModule.forRoot(),
	TypeOrmModule.forRootAsync({
		imports: [ConfigModule],
		inject: [ConfigService],
		useFactory: (configService: ConfigService) => {
			const { host, port, username, password, database } =
				configService.get('db');

			return {
				type: 'mysql',
				// .env 获取
				host,
				port,
				username,
				password,
				database,
				// entities
				entities: ['dist/**/*.entity{.ts,.js}'],
			};
		},
	}),
];

@Module({
	imports: [...libModules, ...businessModules, AuthModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
