import { StackUsingObject } from './stack.js';

export function decimalTobinary(number) {
  const remStack = new StackUsingObject();
  let rest;
  let binaryString = '';

  while (number > 0) {
    rest = Math.floor(number % 2);
    remStack.push(rest);
    console.log(rest);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export function baseConverter(number, base) {
  const remStack = new StackUsingObject();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rest;

  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rest = Math.floor(number % base);
    remStack.push(rest);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
