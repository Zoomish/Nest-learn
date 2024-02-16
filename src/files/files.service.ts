import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {

    async createFile(file): Promise<string> {
        return 'This action adds a new file';
    }
}
