import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function start() {
    const app = await NestFactory.create(AppModule);
    const PORT = Number(process.env.PORT) || 5000;

    const config = new DocumentBuilder()
        .setTitle('NestJS-Learn')
        .setDescription("Zoomish")
        .setVersion('1.0.0')
        .addTag('NestJS')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    
    app.useGlobalPipes( new ValidationPipe());

    await app.listen(PORT, () => console.log(`Server run on ${PORT}`));
}

start();