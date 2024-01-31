import { Body, Controller, Post } from "@nestjs/common";
import { Testttttttttt } from "./dtos";

@Controller("2")
export class Controller2 {
    @Post()
    test(@Body() body: Testttttttttt) {
        return body;
    }
}