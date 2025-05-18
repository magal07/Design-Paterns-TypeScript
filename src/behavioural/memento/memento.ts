export interface Memento {
  getName(): string;
  getDate(): Date;
  getFilePath(): string;
  getFileFormat(): string;
}
