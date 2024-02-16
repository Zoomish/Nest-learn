import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        try {
            
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
