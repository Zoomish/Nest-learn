import { AppService } from './app.service';

import { Controller, Get } from '@nestjs/common';
@Controller('/api')

export class AppController {

    constructor(private appService: AppService){}

    @Get('/users')
    getUsers() {
        return this.appService.getUsers()
    }
}