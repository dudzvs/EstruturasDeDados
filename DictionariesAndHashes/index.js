import { Dictionary } from "./dictionary.js";
import { HashTable } from "./hashMap.js";
const d = new Dictionary();

d.set("loud", 22);
d.set("sdwdw", 21);
d.get("loud");
/* console.log(d); */

const ht = new HashTable();

ht.put("Andreas", "andreas@mail.com");
ht.put("Suze", "suze@mail.com");
ht.put("Leonardo", "Leo@mail.com");
ht.put("Lorena", "Lor@mail.com");
ht.put("Fabio", "FaFa@mail.com");
console.log(ht.remove("Fabio"));
console.log(ht.get("Fabio"));
console.log(ht);
