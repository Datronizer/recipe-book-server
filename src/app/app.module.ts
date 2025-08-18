import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envService } from './env/env.service';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from 'src/middleware/LoggerMiddleware';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [
    RecipeModule,
    UserModule,
    IngredientModule,

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
