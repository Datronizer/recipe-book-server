import { BaseEntity } from "src/app/base/entities/base.entity";
import { IngredientEntity } from "src/app/ingredient/entities/ingredient.entity";
import { RecipeIngredientEntity } from "src/app/ingredient/entities/recipe-ingredient.entity";
import { Column, OneToMany } from "typeorm";

export class RecipeEntity extends BaseEntity
{
    // Define properties for the Recipe entity
    @Column({ type: "text" })
    title: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @OneToMany(() => RecipeIngredientEntity, e => e.recipe, { cascade: true })
    recipeIngredientLink: RecipeIngredientEntity[];

    @Column({ type: "text" })
    instructions: string;
}
