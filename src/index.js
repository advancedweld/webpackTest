import { add } from './add.js';
import { minus } from './minus.js';

console.log('@@@@add:', add(1, 2));
console.log('@@@@minus:', minus(1, 2));

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = 'hello, webpack';

  return element;
}

document.body.appendChild(component());
