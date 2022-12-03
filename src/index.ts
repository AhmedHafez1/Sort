import { CharactersCollection } from './models/CharactersCollection';
import { NumberCollection } from './models/NumberCollection';
import { Sorter } from './models/Sorter';

const numberCollection = new NumberCollection([22, 24, 65, 84, 36, 41]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const stringCollection = new CharactersCollection('kzsemVHcq09');
const stringSorter = new Sorter(stringCollection);
stringSorter.sort();
console.log(stringCollection.data);
