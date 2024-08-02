import { Deque } from './deque.js';
import { Queue } from './queues.js';
import { palindromeChecker } from './checkPalindrome.js';
const test = new Queue();

test.enqueue(4);
test.enqueue(8);
test.enqueue(65);
test.enqueue(44);
test.enqueue(42);
/* console.log(test.toString()); */

const test2 = new Deque();

test2.addBack('Jack');
test2.addBack('Mack');
test2.addBack('Fack');
test2.addFront('Lack');
/* console.log(test2.toString());
console.log(test2.size());
console.log(test2.isEmpty()); */

console.log(palindromeChecker('ola'));
console.log(palindromeChecker('Step on no pets'));
