import Component from "./Component.interface";

export default class Bag {
  private readonly itemArr: Component[];

  constructor(...component: Component[]) {
    this.itemArr = [...component];
  }

  push(component: Component): void {
    this.itemArr.push(component);
  }

  getPrice(): number {
    return this.itemArr.reduce((acc, cur) => acc + cur.getPrice(), 0);
  }

  getItemList(): Component[] {
    return this.itemArr;
  }
}
