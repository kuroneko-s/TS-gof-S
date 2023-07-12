import Anchor from "./Anchor.interface";
import Wheel from "./Wheel.interface";

export default interface PartsFactory {
  createAnchor(): Anchor;
  createWheel(): Wheel;
}
