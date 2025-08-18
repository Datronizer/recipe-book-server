import { BaseEntity } from "src/app/base/entities/base.entity";
import { RecipeIngredientEntity } from "src/app/recipe/entities/recipe-ingredient.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { IngredientNutrientEntity } from "./ingredient-nutrient.entity";

/**
 * This entity represents 1 ingredient
 * This is used to view nutrients and calories
 * It is not used to store the amount of the ingredient in a recipe (IngredientAmtEntity is used for that)
 */
@Entity({ name: "ingredient" })
export class IngredientEntity extends BaseEntity
{
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "int" })
    calories: number;

    @OneToMany(() => IngredientNutrientEntity, i => i.ingredient)
    ingredientNutrientLink: IngredientNutrientEntity[];

    @OneToMany(() => RecipeIngredientEntity, r => r.ingredient)
    recipeIngredientLink: RecipeIngredientEntity[];
}
