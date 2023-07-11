import People from "./People.interface";
import Company from "./company.interface";

export default class NowCompany implements Company {
  constructor(private name: string, public people: People) {}

  introduce(): void {
    console.log("회사 소개 - Now 회사 - 사장명 - ", this.name);
  }

  introduction() {
    return this.people.getSpec() >= 80;
  }
}
