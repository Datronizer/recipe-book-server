import { BaseEntity } from "src/app/base/entities/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { RecipeEntity } from "src/app/recipe/entities/recipe.entity";
import { IngredientEntity } from "src/app/ingredient/entities/ingredient.entity";


/**
 * This entity represents the amount of an ingredient used in a recipe.
 * This behaves like a junction table
 */
@Entity({ name: "recipe_ingredient" })
export class RecipeIngredientEntity extends BaseEntity
{
    @ManyToOne(() => RecipeEntity, r => r.recipeIngredientLink, { onDelete: 'CASCADE' })
    recipe: RecipeEntity;

    @ManyToOne(() => IngredientEntity, i => i.recipeIngredientLink, { onDelete: 'CASCADE' })
    ingredient: IngredientEntity;

    @Column({ type: "int" })
    quantity: number;
}