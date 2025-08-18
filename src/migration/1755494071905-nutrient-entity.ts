import { MigrationInterface, QueryRunner } from "typeorm";

export class NutrientEntity1755494071905 implements MigrationInterface {
    name = 'NutrientEntity1755494071905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."nutrient_type_enum" AS ENUM('vitamin', 'mineral', 'macronutrient')`);
        await queryRunner.query(`CREATE TABLE "nutrient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" text NOT NULL, "description" text, "type" "public"."nutrient_type_enum" NOT NULL, CONSTRAINT "PK_627939b71671bf88d1a352b490e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."ingredient_nutrient_unit_enum" AS ENUM('mg', 'g')`);
        await queryRunner.query(`CREATE TYPE "public"."ingredient_nutrient_servingunit_enum" AS ENUM('cup', 'tbsp', 'tsp', 'oz', 'g', 'ml', 'l', 'kg', 'piece', 'slice')`);
        await queryRunner.query(`CREATE TABLE "ingredient_nutrient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "amount" double precision NOT NULL, "unit" "public"."ingredient_nutrient_unit_enum" NOT NULL, "servingAmt" double precision NOT NULL, "servingUnit" "public"."ingredient_nutrient_servingunit_enum" NOT NULL, "ingredientId" uuid, "nutrientId" uuid, CONSTRAINT "PK_f8b21a4ef8c893dbdfa7d3812b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ingredient_nutrient" ADD CONSTRAINT "FK_5bf061521465c626ccc24a50798" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredient_nutrient" ADD CONSTRAINT "FK_ed41049803482cbeaf30bc2b886" FOREIGN KEY ("nutrientId") REFERENCES "nutrient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredient_nutrient" DROP CONSTRAINT "FK_ed41049803482cbeaf30bc2b886"`);
        await queryRunner.query(`ALTER TABLE "ingredient_nutrient" DROP CONSTRAINT "FK_5bf061521465c626ccc24a50798"`);
        await queryRunner.query(`DROP TABLE "ingredient_nutrient"`);
        await queryRunner.query(`DROP TYPE "public"."ingredient_nutrient_servingunit_enum"`);
        await queryRunner.query(`DROP TYPE "public"."ingredient_nutrient_unit_enum"`);
        await queryRunner.query(`DROP TABLE "nutrient"`);
        await queryRunner.query(`DROP TYPE "public"."nutrient_type_enum"`);
    }

}
