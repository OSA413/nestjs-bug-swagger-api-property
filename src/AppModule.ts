import { Module } from "@nestjs/common";
import { Controller1 } from "./controller1";
import { TypeOrmModule } from "@nestjs/typeorm";
import "reflect-metadata";
import "dotenv/config";
import { Controller2 } from "./controller2";

@Module({
    controllers: [Controller1, Controller2],
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            database: "postgres",
            username: "postgres",
            password: "postgres",
        })
    ],
})
export class AppModule { }
