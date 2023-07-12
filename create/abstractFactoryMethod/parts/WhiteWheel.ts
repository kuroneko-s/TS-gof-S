import Wheel from "./Wheel.interface";

export default class WhiteWheel implements Wheel {
  getName(): string {
    return "whiteWheel";
  }
}
