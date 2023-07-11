import People from "./People.interface";

export default class ChoiPeople implements People {
  constructor(private name: string, private spec: number) {}

  introduce() {
    console.log("Choi 소개. 이름 - ", this.name, ", 스펙 - ", this.spec);
  }

  getSpec(): number {
    return this.spec;
  }
}
