import { IsArray, IsString } from "class-validator";
import { PrimaryKey } from "src/utils/types";

export class CreateRecipeDto
{
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    ingredientIds: PrimaryKey[];

    @IsString()
    instructions: string;
}
