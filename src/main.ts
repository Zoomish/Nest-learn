import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
require('dotenv').config()
async function start() {
    const app = await NestFactory.create(AppModule);
    console.log(process.env.PORT)
    const PORT = parseInt(process.env.PORT, 10) || 5000;

    await app.listen(PORT, () => console.log(`Server run on ${PORT}`));
}

start();