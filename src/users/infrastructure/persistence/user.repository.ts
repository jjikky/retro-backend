import { User } from '../../domain/user';
import { NullableType } from '@/utils/types/nullable.type';

export abstract class UserRepository {
  abstract create(
    data: Omit<User, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
  ): Promise<User>;

  abstract findByEmail(email: User['email']): Promise<NullableType<User>>;
}
