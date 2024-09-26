import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleSeedService } from './role-seed.service';
import { RoleEntity } from 'src/roles/infrascructure/persistence/relational/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [RoleSeedService],
  exports: [RoleSeedService],
})
export class RoleSeedModule {}
