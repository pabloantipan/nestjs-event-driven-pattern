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