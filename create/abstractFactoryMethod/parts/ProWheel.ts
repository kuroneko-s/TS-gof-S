import Wheel from "./Wheel.interface";

export default class ProWheel implements Wheel {
  getName(): string {
    return "Pro Wheel";
  }
}
