import Skin from "./Skin.interface";

export default class KDA implements Skin {
  constructor(private readonly skinName: string) {}

  getName(): string {
    return this.skinName;
  }
}
