import People from "./People.interface";

export default interface Company {
  people: People;

  introduce(): void; // 회사 소개
  introduction(): boolean; // 채용
}
