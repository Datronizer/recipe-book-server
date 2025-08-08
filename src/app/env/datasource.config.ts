import { DataSource } from "typeorm";
import { envService } from "./env.service";

const datasource = new DataSource(envService.getDataSourceOptions());
datasource.initialize();

export default datasource;