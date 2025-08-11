import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";


enum NutrientType { "vitamin", "mineral", "macronutrient" };
enum NutrientUnit { "mg", "g" };
enum ServingUnit { "cup", "tbsp", "tsp", "oz", "g", "ml", "l", "kg", "piece", "slice" };


export abstract class Nutrient
{
    @IsString()
    abstract name: string;

    @IsOptional()
    abstract description?: string;

    @IsEnum(NutrientType)
    abstract type: NutrientType;

    @IsNumber()
    abstract amount: number;
    @IsEnum(NutrientUnit)
    abstract unit: NutrientUnit;

    @IsNumber()
    abstract servingAmt: number;
    @IsEnum(ServingUnit)
    abstract servingUnit: ServingUnit;
}