import ComponentService from "./ComponentService.interface";

export default class PropagandaDecorator implements ComponentService {
  constructor(private readonly component: ComponentService) {}

  addMsg(msg: string): void {
    this.component.addMsg(msg);
  }
}
