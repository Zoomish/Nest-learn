import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {

    async createFile(file) {
        return 'This action adds a new file';
    }
}
