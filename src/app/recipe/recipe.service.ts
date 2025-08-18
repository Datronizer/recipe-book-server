import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeEntity } from './entities/recipe.entity';
import { IngredientEntity } from 'src/app/ingredient/entities/ingredient.entity';
import { Repository } from 'typeorm';
import { PrimaryKey } from 'src/utils/types';

@Injectable()
export class RecipeService
{
  constructor(
    @InjectRepository(RecipeEntity)
    private readonly recipeRepository: Repository<RecipeEntity>,

    @InjectRepository(IngredientEntity)
    private readonly ingredientRepository: Repository<IngredientEntity>
  ) { }

  create(createRecipeDto: CreateRecipeDto)
  {
    console.log()
    return this.recipeRepository.save(createRecipeDto);
  }

  findAll()
  {
    return this.recipeRepository.find();
  }

  findOne(id: PrimaryKey)
  {
    return this.recipeRepository.findOneBy({ id });
  }

  update(id: PrimaryKey, updateRecipeDto: UpdateRecipeDto)
  {
    return this.recipeRepository.update(id, updateRecipeDto);
  }

  remove(id: PrimaryKey)
  {
    return this.recipeRepository.delete(id);
  }
}
