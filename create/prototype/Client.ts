import Item from "./Item";

const item1 = new Item(
  "item_1",
  "test@email.com",
  "test address",
  15,
  "비고_item_1"
);
console.log("🚀 ~ file: Client.ts:4 ~ item1:", item1);

const item2 = item1.clone();
console.log("🚀 ~ file: Client.ts:7 ~ item2:", item2);

console.log(item1 !== item2);
console.log(item1 != item2);
