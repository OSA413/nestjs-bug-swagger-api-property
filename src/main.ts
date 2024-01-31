import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export default async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder().build();
    const document = SwaggerModule.createDocument(app, config, {
        deepScanRoutes: true,
    });
    SwaggerModule.setup("docs", app, document);
    await app.listen(3000);
}

bootstrap();
