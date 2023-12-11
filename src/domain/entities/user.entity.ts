export class User {
  public username: string;
  public email: string;

  constructor({ username, email }) {
    this.username = username;
    this.email = email;
  }
}