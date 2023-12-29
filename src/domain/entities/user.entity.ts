import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class UserEntity {

  @ObjectIdColumn()
  id: string;

  @Column({ unique: true })
  public username: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

}
