import { NumberCollection } from './models/NumberCollection';
import { Sorter } from './models/Sorter';

const numberCollection = new NumberCollection([22, 24, 65, 84, 36, 41]);
const sorter = new Sorter(numberCollection);

sorter.sort();

console.log(numberCollection.data);
