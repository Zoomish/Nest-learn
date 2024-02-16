import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToClass(metadata.metatype, value);
    }
}