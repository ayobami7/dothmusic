import { DataSource } from "typeorm";
import { User } from "../models/User";

export const AppDataSource = new DataSource({
    entities: [User],
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "dothmusic",
    synchronize: true,
    logging: true,
    // migrations: ["src/migrations/*.ts"],
    // subscribers: ["src/subscribers/*.ts"],
});