import { HttpAdapterHost, NestFactory } from '@nestjs/core';
// import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { AllExceptionsFilter } from 'src/all-exceptions.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // app.useLogger(app.get(MyLoggerService));
  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
