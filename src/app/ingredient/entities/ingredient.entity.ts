import { BaseEntity } from "src/app/base/entities/base.entity";
import { RecipeIngredientEntity } from "src/app/recipe/entities/recipe-ingredient.entity";
import { Column, Entity, OneToMany } from "typeorm";

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

    // @Column()
    // nutrients: Nutrient[];

    @OneToMany(() => RecipeIngredientEntity, r => r.ingredient)
    recipeIngredientLink: RecipeIngredientEntity;
}
