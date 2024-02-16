import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

interface PostCreationAttrs {
    title: string;
    content: string;
}
@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентефикатор' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({ example: 'test@gmail.com', description: 'Уникальная почта' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;
}