import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AllConfigType } from '../config/config.type';
import { UserEntity } from 'src/users/infrastructure/persistence/relational/entities/user.entity';
import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';
import { RoleEntity } from 'src/roles/infrascructure/persistence/relational/entities/role.entity';
import { StatusEntity } from 'src/statuses/infrascructure/persistence/relational/entities/status.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService<AllConfigType>) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<string>('database.type', { infer: true }),
      host: this.configService.get<string>('database.host', { infer: true }),
      port: this.configService.get<number>('database.port', { infer: true }),
      database: this.configService.get<string>('database.name', {
        infer: true,
      }),
      username: this.configService.get<string>('database.username', {
        infer: true,
      }),
      password: this.configService.get<string>('database.password', {
        infer: true,
      }),
      synchronize: this.configService.get<boolean>('database.synchronize', {
        infer: true,
      }),
      entities: [UserEntity, FileEntity, RoleEntity, StatusEntity],
      dropSchema: false,
      keepConnectionAlive: true,
    } as TypeOrmModuleOptions;
  }
}
