import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import type { Veichle } from '../veichle/veichle';

export function randomCarAlgorithm(): Veichle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVeichle('Fusca');
  const car2 = carFactory.getVeichle('Celta Preto');
  const bicycle = bicycleFactory.getVeichle('Bicicleta Preta');
  const cars = [car1, car2, bicycle];
  return cars[randomNumbers(cars.length)];
}
