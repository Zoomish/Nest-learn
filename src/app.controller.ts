
import { Controller, Get } from '@nestjs/common';
@Controller('/api')

export class AppController {
    @Get('/users')
    getUsers() {
        return [{ id: 1, name: 'Zoomish' }];
    }
}