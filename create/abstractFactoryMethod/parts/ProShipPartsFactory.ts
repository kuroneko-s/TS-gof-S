import Anchor from "./Anchor.interface";
import PartsFactory from "./PartsFactory.interface";
import ProAnchor from "./ProAnchor";
import ProWheel from "./ProWheel";
import Wheel from "./Wheel.interface";

export default class ProShipPartsFactory implements PartsFactory {
  createAnchor(): Anchor {
    return new ProAnchor();
  }

  createWheel(): Wheel {
    return new ProWheel();
  }
}
