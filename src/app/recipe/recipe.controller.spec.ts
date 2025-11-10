import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { RecipeEntity } from './entities/recipe.entity';
import { IngredientEntity } from '@/app/ingredient/entities/ingredient.entity';

const mockRecipeRepository = {
  save: jest.fn(),
  find: jest.fn(),
  findOneBy: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

const mockIngredientRepository = {
  find: jest.fn(),
  findOneBy: jest.fn(),
};

describe('RecipeController', () => {
  let controller: RecipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeController],
      providers: [
        RecipeService,
        { provide: getRepositoryToken(RecipeEntity), useValue: mockRecipeRepository },
        { provide: getRepositoryToken(IngredientEntity), useValue: mockIngredientRepository },
      ],
    }).compile();

    controller = module.get<RecipeController>(RecipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
