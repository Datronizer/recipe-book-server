import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envService } from './env/env.service';
import { UserModule } from './user/user.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [
    IngredientModule,
    RecipeModule,
    UserModule,
    
    TypeOrmModule.forRoot(envService.getDataSourceOptions()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
