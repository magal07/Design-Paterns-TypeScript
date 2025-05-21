import { MyDataStructure } from './my-data-structure-';
import { MyDefaultIterator } from './my-default-iterator';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
// console.log(dataStructure);

const [a, b] = dataStructure;

console.log('ROUBADOS: ', a, b);
console.log('Executei varias coisas e depois usei o iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest);
console.log();

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Aqui precisa zerar o Iterator');
dataStructure.changeIterator(new MyReverseIterator(dataStructure));
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('Aqui volta ao padrão');
dataStructure.changeIterator(new MyDefaultIterator(dataStructure));
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
