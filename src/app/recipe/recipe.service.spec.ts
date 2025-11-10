import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
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

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        { provide: getRepositoryToken(RecipeEntity), useValue: mockRecipeRepository },
        { provide: getRepositoryToken(IngredientEntity), useValue: mockIngredientRepository },
      ],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
