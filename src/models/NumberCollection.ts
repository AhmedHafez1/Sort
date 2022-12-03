export class NumberCollection {
  constructor(public data: number[]) {}

  get length() {
    return this.data.length;
  }

  compare(left: number, right: number) {
    return this.data[left] > this.data[right];
  }

  swap(left: number, right: number) {
    [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
  }
}
