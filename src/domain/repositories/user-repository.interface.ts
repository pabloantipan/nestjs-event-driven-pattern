import { User } from "@domain/classes/user";

export interface UserRepository {

  save(user: User): Promise<void>;

  findById(id: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;
  // ... other repository methods ...
}