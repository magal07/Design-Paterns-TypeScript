import { Bicycle } from '../veichle/bicycle';
import type { Veichle } from '../veichle/veichle';
import { VeichleFactory } from './veichle-factory';

export class BicycleFactory extends VeichleFactory {
  getVeichle(vehicleName: string): Veichle {
    return new Bicycle(vehicleName);
  }
}
