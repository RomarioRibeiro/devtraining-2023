import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1731360356397 } from "src/migrations/1731360356397-CreateCoursesTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1731360356397]
})