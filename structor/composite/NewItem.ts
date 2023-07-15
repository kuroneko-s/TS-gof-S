import Component from "./Component.interface";

export default class NewItem implements Component {
  constructor(
    private readonly name: string,
    private readonly price: number,
    private readonly primium: boolean
  ) {}

  getPrice(): number {
    return this.price;
  }

  isPrimium(): boolean {
    return this.primium;
  }
}
