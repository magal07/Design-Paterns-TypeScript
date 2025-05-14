import type { Veichle } from './veichle';

export class Car implements Veichle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} this searching ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} stop`);
  }
}
