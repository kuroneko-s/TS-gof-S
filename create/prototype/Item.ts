export default class Item {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly address: string,
    private readonly age: number,
    private readonly etc: string
  ) {}

  clone(): Item {
    return new Item(this.name, this.email, this.address, this.age, this.etc);
  }
}
