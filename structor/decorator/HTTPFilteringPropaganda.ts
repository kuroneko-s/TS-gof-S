import Component from "./ComponentService.interface";
import PropagandaDecorator from "./PropagandaDecorator";

export default class HTTPFilteringPropaganda extends PropagandaDecorator {
  constructor(component: Component) {
    super(component);
  }

  // Override
  addMsg(msg: string): void {
    if (!msg.includes("http")) {
      super.addMsg(msg);
    }
  }
}
