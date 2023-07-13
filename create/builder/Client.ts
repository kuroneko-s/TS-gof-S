import DefaultLocalePeopleBuilder from "./DefaultLocalePeopleBuilder";
import People from "./People";
import PeopleBuilder from "./PeopleBuilder";

const builder = new PeopleBuilder();
const choiDong: People = builder
  .name("dong")
  .age(29)
  .email("choidong")
  .address("평택")
  .locale("KR")
  .build();

console.log(choiDong.toString());

const choi = new DefaultLocalePeopleBuilder()
  .age(30)
  .email("dong")
  .name("hyuk")
  .build();

console.log(choi.toString());
