import type { MyDataStructure } from './my-data-structure-';
import type { MyIteratorProtocol } from './my-iterator-protocol';

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index: number;

  constructor(private readonly dataStructure: MyDataStructure) {
    this.index = dataStructure.size();
  }

  reset(): void {
    this.index = this.dataStructure.size();
  }

  next(): IteratorResult<string> {
    this.index--;

    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
