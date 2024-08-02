import { Stack } from './stack-array.js';
import { StackUsingObject } from './stack.js';
import { decimalTobinary } from './converterDecimalToBinary.js';
import { baseConverter } from './converterDecimalToBinary.js';
// Stack using ARRAYS;
const stack = new Stack();

/* console.log(stack.isEmpty()); */
stack.push(8);
stack.push(10);
stack.push(5);
stack.push(22);
stack.pop();
/* console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty()); */

// Stack using Object;
const stack2 = new StackUsingObject();

stack2.push(5);
stack2.push(8);
stack2.pop();
stack2.push(22);
stack2.push(44);
/* console.log(stack2._items[0]); */

console.log(decimalTobinary(220));
console.log(baseConverter(335, 16));
