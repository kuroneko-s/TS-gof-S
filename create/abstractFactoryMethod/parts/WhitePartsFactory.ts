import Anchor from "./Anchor.interface";
import PartsFactory from "./PartsFactory.interface";
import Wheel from "./Wheel.interface";
import WhiteAnchor from "./WhiteAnchor";
import WhiteWheel from "./WhiteWheel";

export default class WhiteShipPartsFactory implements PartsFactory {
  constructor() {}

  createWheel(): Wheel {
    return new WhiteWheel();
  }
  createAnchor(): Anchor {
    return new WhiteAnchor();
  }
}
