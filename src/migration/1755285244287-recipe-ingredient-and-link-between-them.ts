import { MigrationInterface, QueryRunner } from "typeorm";

export class RecipeIngredientAndLinkBetweenThem1755285244287 implements MigrationInterface {
    name = 'RecipeIngredientAndLinkBetweenThem1755285244287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "name" text NOT NULL, "description" text, "calories" integer NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe_ingredient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "quantity" integer NOT NULL, "recipeId" uuid, "ingredientId" uuid, CONSTRAINT "PK_a13ac3f2cebdd703ac557c5377c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "title" text NOT NULL, "description" text, "instructions" text NOT NULL, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_1ad3257a7350c39854071fba211" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "FK_2879f9317daa26218b5915147e7" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_2879f9317daa26218b5915147e7"`);
        await queryRunner.query(`ALTER TABLE "recipe_ingredient" DROP CONSTRAINT "FK_1ad3257a7350c39854071fba211"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
        await queryRunner.query(`DROP TABLE "recipe_ingredient"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
    }

}
