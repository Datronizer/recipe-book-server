import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });
export class EnvService
{
    constructor(private env: { [key: string]: string | undefined }) { }

    public require(key: string)
    {
        const value = this.env[key];
        if (!value)
        {
            throw new Error(`Missing environment variable: ${key}`);
        }
        return value;
    }

    public get isProduction(): boolean
    {
        const mode = this.require("NODE_ENV");
        return mode === "production";
    }

    public getDataSourceOptions(): DataSourceOptions
    {
        // TS_NODE is provided by us for some `npm run` commands
        // TS_NODE_DEV is provided by `ts-node-dev` whenever the code is being run by it.
        const isTypescript = process.env.TS_NODE === "true" || process.env.TS_NODE_DEV === "true";

        return {
            type: "postgres",

            host: this.require("POSTGRES_HOST"),
            port: parseInt(this.require("POSTGRES_PORT")),
            username: this.require("POSTGRES_USER"),
            password: this.require("POSTGRES_PASSWORD"),
            database: this.require("POSTGRES_DATABASE"),

            entities: isTypescript ? ["src/**/*.entity.ts"] : ["dist/**/*.entity.js"],

            migrationsTableName: "migration",
            migrations: isTypescript ? ["src/migration/*.ts"] : ["dist/migration/*.js"],

            // TODO: This might need to be better specified - especially if we end up using a more complicated DB set-up.
            ssl: this.isProduction && process.env.USE_SSL === "true",
        };
    }

    public get envService(): EnvService
    {
        return this;
    }
}

export const envService = new EnvService(process.env);
