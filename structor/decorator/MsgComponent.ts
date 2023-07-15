import Component from "./ComponentService.interface";

export default class MsgComponent implements Component {
  private readonly msgArr: string[];

  constructor() {}

  addMsg(msg: string): void {}

  printMsg(): void {
    this.msgArr.forEach((msg) => console.log(msg));
  }
}
