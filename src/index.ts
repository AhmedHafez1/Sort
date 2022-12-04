import { CharactersCollection } from './models/CharactersCollection';
import { LinkedList } from './models/LinkedList';
import { NumberCollection } from './models/NumberCollection';
import { Sorter } from './models/Sorter';

const numberCollection = new NumberCollection([22, 24, 65, 84, 36, 41, -3]);
numberCollection.sort();
console.log(numberCollection.data);

const stringCollection = new CharactersCollection('kzsemVHcq09');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(210);
linkedList.add(-9);
linkedList.add(8);
linkedList.add(0);
linkedList.add(6);

linkedList.sort();
linkedList.print();
