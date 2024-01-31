import { Body, Controller, Put } from "@nestjs/common";
import { InitData } from "./dtos";

@Controller("1")
export class Controller1 {
  @Put()
  test(@Body() data: InitData) {
        return data;
    }
}
