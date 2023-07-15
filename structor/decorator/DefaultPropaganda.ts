import Component from "./ComponentService.interface";

export default class DefaultPropaganda implements Component {
  constructor() {}

  addMsg(msg: string): void {
    console.log(msg);
  }
}
