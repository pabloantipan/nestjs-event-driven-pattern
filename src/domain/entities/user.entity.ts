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
  public id: string;
  public username: string;
  public email: string;
  public password: string;

  constructor({ id = null, username, email, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}