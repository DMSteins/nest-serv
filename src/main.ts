import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ReportLogger } from './common/log/ReportLogger';
import { LogInterceptor } from './common/log/log.interceptor';
import { AllExceptionFilter } from './common/error/all-exception.filter'
import { HttpExceptionFilter } from './common/error/http-exception.filter'
import { TransformInterceptor } from './common/transform/transform.interceptor';

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 9090;
const PREFIX = process.env.API_PREFIX || 'api';

async function bootstrap() {
	const reportLogger = new ReportLogger();

	const app = await NestFactory.create(AppModule, {
		logger: IS_DEV ? reportLogger : ['error', 'warn'],
	});
	app.setGlobalPrefix(PREFIX);
	app.useGlobalFilters(new HttpExceptionFilter(), new AllExceptionFilter());
	app.useGlobalPipes(new ValidationPipe({
		// fix parameter escape    
		whitelist: true,
	}));
	app.useGlobalInterceptors(
		new LogInterceptor(reportLogger),
		new TransformInterceptor(),
	);
	await app.listen(PORT, () => {
		Logger.log(`服务已经启动,接口请访问:http://wwww.localhost:${PORT}/${PREFIX}`);
	});
}
bootstrap();
