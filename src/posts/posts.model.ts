import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

interface PostCreationAttrs {
    title: string;
    content: string;
    image: string;
}
@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({ example: 'Пираты', description: 'Очень интересный заголовок' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @ApiProperty({ example: 'АААААА', description: 'ОЧень интересный контент' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({ example: 'Картинка', description: 'Захватывающая картинка' })
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;
}