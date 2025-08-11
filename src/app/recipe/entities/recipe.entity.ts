import { BaseEntity } from "src/app/base/entities/base.entity";
import { RecipeIngredientEntity } from "src/app/recipe/entities/recipe-ingredient.entity";
import { Column, Entity, OneToMany } from "typeorm";


@Entity({ name: "recipe" })
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
