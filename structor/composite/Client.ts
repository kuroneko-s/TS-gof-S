import Bag from "./Bag";
import Item from "./Item";
import NewItem from "./NewItem";

const item1 = new Item("item1", 1000);
const item2 = new Item("item2", 12000);
const item3 = new Item("item3", 3000);

const bag = new Bag(item1, item2, item3);

console.log(bag.getItemList());
console.log(bag.getPrice());

bag.push(new NewItem("new primium Item", 1300000, true));

console.log("=====");
console.log(bag.getItemList());
console.log(bag.getPrice());
