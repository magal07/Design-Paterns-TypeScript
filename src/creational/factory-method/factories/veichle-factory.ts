import type { Veichle } from '../veichle/veichle';

export abstract class VeichleFactory {
  // factory method
  abstract getVeichle(vehicleName: string): Veichle;

  pickUp(customerName: string, vehicleName: string): Veichle {
    const car = this.getVeichle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
