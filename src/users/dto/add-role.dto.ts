import { IsNumber, IsString } from "class-validator"

export class AddRoleDto {
    @IsString({ message: 'Должно быть строкой' })
    readonly value: string
    @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Должно быть числом' })
    readonly userId: number
}