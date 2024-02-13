import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'nest-learn',
            models: [],
            autoLoadModels: true,
            synchronize: true,
        }),
        UsersModule,
    ],
})

export class AppModule { }