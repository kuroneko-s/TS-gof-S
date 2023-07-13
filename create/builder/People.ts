export default class People {
  constructor(
    private name: string,
    private email: string,
    private age: number,
    private locale: string,
    private address: string
  ) {}

  toString(): string {
    return `name - ${this.name}, email - ${this.email} age - ${this.age}, locale - ${this.locale}, address - ${this.address}`;
  }
}
