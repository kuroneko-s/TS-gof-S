export default class Account {
  constructor(
    private readonly username: string,
    private readonly password: string,
    private readonly email: string
  ) {}

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  getEmail(): string {
    return this.email;
  }
}
