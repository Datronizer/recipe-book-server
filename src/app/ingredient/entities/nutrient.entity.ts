import { BaseEntity } from "src/app/base/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { IngredientNutrientEntity } from "./ingredient-nutrient.entity";


export enum NutrientType
{
    vitamin = "vitamin",
    mineral = "mineral",
    macronutrient = "macronutrient"
}

@Entity({ name: "nutrient" })
export class NutrientEntity extends BaseEntity
{
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "enum", enum: NutrientType })
    type: NutrientType;

    @OneToMany(() => IngredientNutrientEntity, i => i.nutrient)
    ingredientNutrientLink: IngredientNutrientEntity[];
}