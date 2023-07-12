import Ship from "./Ship";

export default interface ShipFactory {
  createShip(): Ship;
}
