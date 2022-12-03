"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./models/NumberCollection");
const Sorter_1 = require("./models/Sorter");
const numberCollection = new NumberCollection_1.NumberCollection([22, 24, 65, 84, 36, 41]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
