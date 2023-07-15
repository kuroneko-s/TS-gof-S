import Component from "./Component.interface";

export default class Item implements Component {
  constructor(private readonly name: string, private readonly price: number) {}

  getPrice(): number {
    return this.price;
  }
}
