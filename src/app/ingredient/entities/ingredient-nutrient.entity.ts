import { Column, Entity, ManyToOne } from "typeorm";
import { IngredientEntity } from "./ingredient.entity";
import { NutrientEntity } from "./nutrient.entity";
import { BaseEntity } from "src/app/base/entities/base.entity";


export enum NutrientUnit
{
    mg = "mg",
    g = "g"
}

export enum ServingUnit
{
    cup = "cup",
    tbsp = "tbsp",
    tsp = "tsp",
    oz = "oz",
    g = "g",
    ml = "ml",
    l = "l",
    kg = "kg",
    piece = "piece",
    slice = "slice"
}


@Entity({ name: "ingredient_nutrient" })
export class IngredientNutrientEntity extends BaseEntity
{
    @ManyToOne(() => IngredientEntity, e => e.ingredientNutrientLink, { onDelete: 'CASCADE' })
    ingredient: IngredientEntity;

    @ManyToOne(() => NutrientEntity, e => e.ingredientNutrientLink, { onDelete: 'CASCADE' })
    nutrient: NutrientEntity;

    @Column({ type: "float" })
    amount: number;

    @Column({ type: "enum", enum: NutrientUnit })
    unit: NutrientUnit;

    @Column({ type: "float" })
    servingAmt: number;

    @Column({ type: "enum", enum: ServingUnit })
    servingUnit: ServingUnit;
}