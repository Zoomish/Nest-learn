import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({ example: 'test@gmail.com', description: 'Уникальная почта' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'Забанен ли пользователь' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'Флуд', description: 'Прчина бана' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: null })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role;

    @HasMany(() => Post)
    posts: Post[];
}