import { BaseEntity } from "src/app/base/entities/base.entity";
import { UserEntity } from "src/app/user/entities/user.entity";
import { Entity, ManyToOne } from "typeorm";
import { RecipeEntity } from "./recipe.entity";


/** 
 * This is a junction table to define recipes and their authors
 * One author can have many recipes, and one recipe can have many authors.
 */
@Entity({ name: "recipe_user" })
export class RecipeUserEntity extends BaseEntity
{
    @ManyToOne(() => RecipeEntity)
    recipe: RecipeEntity;

    @ManyToOne(() => UserEntity)
    user: UserEntity;
}
