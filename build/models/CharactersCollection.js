"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        [characters[leftIndex], characters[rightIndex]] = [
            characters[rightIndex],
            characters[leftIndex],
        ];
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
