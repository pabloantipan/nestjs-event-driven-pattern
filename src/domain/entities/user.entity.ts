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

export class User {
  public username: string;
  public email: string;
  public password: string;

  constructor({ username, email, password }) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}