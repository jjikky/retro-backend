import { IsNumber } from 'class-validator';
import { Role } from '../domain/role';

export class RoleDto implements Role {
  @IsNumber()
  id: number;
}
