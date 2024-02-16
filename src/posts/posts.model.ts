import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}
@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;
    
    @ApiProperty({ example: 'Пираты', description: 'Очень интересный заголовок' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({ example: 'АААААА', description: 'ОЧень интересный контент' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({ example: 'Картинка', description: 'Захватывающая картинка' })
    @Column({ type: DataType.STRING, allowNull: true })
    image: string;

    @ApiProperty({ example: 1, description: 'Id Создателя' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number

    @BelongsTo(() => User)
    autor: User
}