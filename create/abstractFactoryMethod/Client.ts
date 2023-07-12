import ProShipFactory from "./ProShipFactory";
import WhiteShipFactory from "./WhiteShipFactory";
import ProShipPartsFactory from "./parts/ProShipPartsFactory";
import WhiteShipPartsFactory from "./parts/WhitePartsFactory";

const shipFactory = new WhiteShipFactory(new WhiteShipPartsFactory());

const ship = shipFactory.createShip();
ship.introduce();

const proShipFactory = new ProShipFactory(new ProShipPartsFactory());
const proShip = proShipFactory.createShip();
proShip.introduce();
