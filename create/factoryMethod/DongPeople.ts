import People from "./People.interface";

export default class DongPeople implements People {
  constructor(private name: string, private spec: number) {}

  introduce() {
    console.log("Dong 소개. 이름 - ", this.name, ", 스펙 - ", this.spec);
  }

  getSpec(): number {
    return this.spec;
  }

  dong() {
    console.log("dong original method");
  }
}
