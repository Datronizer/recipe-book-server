import { MigrationInterface, QueryRunner } from "typeorm";

export class RecipeUsersJunctionTable1755394277585 implements MigrationInterface {
    name = 'RecipeUsersJunctionTable1755394277585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "recipeId" uuid, "userId" uuid, CONSTRAINT "PK_385770dfbf5b275c495dd298546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipe_user" ADD CONSTRAINT "FK_f54e802ace39545846bf874e766" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipe_user" ADD CONSTRAINT "FK_72840498f373d843ed1f056639b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_user" DROP CONSTRAINT "FK_72840498f373d843ed1f056639b"`);
        await queryRunner.query(`ALTER TABLE "recipe_user" DROP CONSTRAINT "FK_f54e802ace39545846bf874e766"`);
        await queryRunner.query(`DROP TABLE "recipe_user"`);
    }

}
