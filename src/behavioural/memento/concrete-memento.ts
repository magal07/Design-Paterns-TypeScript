import type { Memento } from './memento';

export class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
    private fileFormat: string,
  ) {}
  getFilePath(): string {
    return this.filePath;
  }
  getFileFormat(): string {
    return this.fileFormat;
  }

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
  }
}
