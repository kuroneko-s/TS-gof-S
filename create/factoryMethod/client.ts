import ChoiPeople from "./ChoiPeople";
import DongPeople from "./DongPeople";
import PaperCompany from "./PaperCompany";

const choi = new ChoiPeople("choi", 81);

const paperCompay = new PaperCompany("동혁", choi);

paperCompay.introduce();
console.log(paperCompay.introduction());

const dong = new ChoiPeople("dong", 64);

const paperCompay2 = new PaperCompany("dongHyuk", dong);

console.log(paperCompay2.introduction());

const dong22 = new DongPeople("dongHyuk", 99);
const paperCompay22 = new PaperCompany("dongHyuk", dong22);
console.log(paperCompay22.introduction());

dong22.dong();
