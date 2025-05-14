import { Car } from '../veichle/car';
import type { Veichle } from '../veichle/veichle';
import { VeichleFactory } from './veichle-factory';

export class CarFactory extends VeichleFactory {
  getVeichle(vehicleName: string): Veichle {
    return new Car(vehicleName);
  }
}
