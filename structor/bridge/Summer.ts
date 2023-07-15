import Skin from "./Skin.interface";

export default class Summer implements Skin {
  constructor(private readonly skinName: string) {}

  getName(): string {
    return this.skinName;
  }
}
