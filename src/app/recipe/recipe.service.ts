import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeEntity } from './entities/recipe.entity';
import { IngredientEntity } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

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

  findOne(id: number)
  {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto)
  {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number)
  {
    return `This action removes a #${id} recipe`;
  }
}
