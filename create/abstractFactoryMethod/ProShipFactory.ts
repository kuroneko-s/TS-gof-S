import Ship from "./Ship";
import ShipFactory from "./ShipFactory.interface.ts";
import PartsFactory from "./parts/PartsFactory.interface.js";

export default class ProShipFactory implements ShipFactory {
  constructor(private readonly partsFactory: PartsFactory) {}

  createShip(): Ship {
    return new Ship(
      this.partsFactory.createAnchor(),
      this.partsFactory.createWheel(),
      "Pro Sheep",
      "choi@email.com"
    );
  }
}
