import { Exclude, Expose } from 'class-transformer';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number | string;

  @Expose({ groups: ['me', 'admin'] })
  email: string | null;

  @Exclude({ toPlainOnly: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @Expose({ groups: ['me', 'admin'] })
  nickname: string | null;

  @Expose({ groups: ['me', 'admin'] })
  socialId?: string | null;

  // TODO : 타입 추가

  // photo?: FileType | null;

  // role?: Role | null;

  // status?: Status;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;
}
