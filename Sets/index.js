import { Set } from "./set.js";

const setA = new Set();
const setB = new Set();
setB.add("Justin");
setB.add("Ann");
setB.add("Flak");
setB.add("Clair");

setA.add("Myke");
setA.add("Clair");
setA.add("Jack");
setA.add("Justin");
setA.delete("Myke");
console.log(setA.has("Myke"));
console.log(setA.size());
const union = setA.union(setB);
console.log(union.values());
const intersection = setA.intersection(setB);
console.log(intersection.values());
const difference = setA.difference(setB);
console.log(difference.values());
