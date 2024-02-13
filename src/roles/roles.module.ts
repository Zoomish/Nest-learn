import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';

@Module({
  controllers: [RolesController]
})
export class RolesModule {}
