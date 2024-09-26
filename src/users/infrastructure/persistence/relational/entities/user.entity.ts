import { Exclude, Expose } from 'class-transformer';
import { AuthProvidersEnum } from 'src/auth/auth-providers.enum';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import { FileEntity } from 'src/files/infrastructure/persistence/relational/entities/file.entity';
import { RoleEntity } from 'src/roles/infrascructure/persistence/relational/entities/role.entity';
import { StatusEntity } from 'src/statuses/infrascructure/persistence/relational/entities/status.entity';
import {
  AfterLoad,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number | string;

  @Expose({ groups: ['me', 'admin'] })
  @Column({ type: String, nullable: true })
  email: string | null;

  @Exclude({ toPlainOnly: true })
  @Column({ type: String, nullable: true })
  password?: string;

  @Exclude({ toPlainOnly: true })
  previousPassword?: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @Column({ default: AuthProvidersEnum.email })
  @Expose({ groups: ['me', 'admin'] })
  provider: string;

  @Index()
  @Column({ type: String, nullable: true })
  nickname: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  @Expose({ groups: ['me', 'admin'] })
  socialId?: string | null;

  @OneToOne(() => FileEntity, { eager: true })
  @JoinColumn()
  photo?: FileEntity | null;

  @ManyToOne(() => RoleEntity, {
    eager: true,
  })
  @JoinColumn()
  role?: RoleEntity | null;

  @ManyToOne(() => StatusEntity, {
    eager: true,
  })
  @JoinColumn()
  status?: StatusEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
