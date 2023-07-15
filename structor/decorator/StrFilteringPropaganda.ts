import ComponentService from "./ComponentService.interface";
import PropagandaDecorator from "./PropagandaDecorator";

export default class StrFilteringPropaganda extends PropagandaDecorator {
  constructor(private readonly compoenntService: ComponentService) {
    super(compoenntService);
  }

  addMsg(msg: string): void {
    super.addMsg(msg.replace("...", ""));
  }
}
