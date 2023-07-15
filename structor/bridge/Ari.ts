import Champion from "./Champion..interface";
import Skin from "./Skin.interface";

export default class Ari implements Champion {
  private readonly name = "ARI";

  constructor(private readonly skin: Skin) {}

  move(): void {
    console.log(`${this.skin.getName()} ${this.name} move`);
  }

  skillQ(): void {
    console.log(`${this.skin.getName()} ${this.name} skill Q`);
  }

  skillW(): void {
    console.log(`${this.skin.getName()} ${this.name} skill Q`);
  }

  skillE(): void {
    console.log(`${this.skin.getName()} ${this.name} skill Q`);
  }

  skillR(): void {
    console.log(`${this.skin.getName()} ${this.name} skill Q`);
  }
}
