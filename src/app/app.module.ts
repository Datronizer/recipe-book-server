import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envService } from './env/env.service';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from 'src/middleware/LoggerMiddleware';

@Module({
  imports: [
    RecipeModule,
    UserModule,

    TypeOrmModule.forRoot(envService.getDataSourceOptions()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule
{
  configure(consumer: MiddlewareConsumer)
  {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
