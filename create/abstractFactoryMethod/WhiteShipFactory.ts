import Ship from "./Ship";
import ShipFactory from "./ShipFactory.interface.ts";
import PartsFactory from "./parts/PartsFactory.interface";

export default class WhiteShipFactory implements ShipFactory {
  constructor(private readonly partsFactory: PartsFactory) {}

  createShip(): Ship {
    return new Ship(
      this.partsFactory.createAnchor(),
      this.partsFactory.createWheel(),
      "White Sheep",
      "dong@email.com"
    );
  }
}
