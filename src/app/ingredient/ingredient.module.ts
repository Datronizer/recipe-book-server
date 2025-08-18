import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientEntity } from './entities/ingredient.entity';
import { NutrientEntity } from './entities/nutrient.entity';
import { IngredientNutrientEntity } from './entities/ingredient-nutrient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IngredientEntity,
      IngredientNutrientEntity,
      NutrientEntity
    ])
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule { }
