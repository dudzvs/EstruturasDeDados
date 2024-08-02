import { Deque } from './deque.js';

export function palindromeChecker(text) {
  if (!text || text.length === 0) {
    return false;
  }

  const deque = new Deque();
  const lowerText = text.toLocaleLowerCase().split(' ').join('');
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerText.length; i++) {
    deque.addBack(lowerText.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}
