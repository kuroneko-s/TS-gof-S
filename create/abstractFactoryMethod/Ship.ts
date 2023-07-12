import Anchor from "./parts/Anchor.interface";
import Wheel from "./parts/Wheel.interface";

export default class Ship {
  constructor(
    private readonly anchor: Anchor,
    private readonly wheel: Wheel,
    private readonly name: string,
    private readonly email: string
  ) {}

  introduce() {
    console.log(
      `anchor - ${this.anchor.getName()}, wheel - ${this.wheel.getName()}, shipName - ${
        this.name
      }, shipEmail - ${this.email}`
    );
  }
}
