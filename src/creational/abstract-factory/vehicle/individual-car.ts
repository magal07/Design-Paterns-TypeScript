import type { Customer } from '../customer/customer';
import type { VehicleProtocol } from './vehicle-protocol';

export class IndividualCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(`${this.name} this searching ${this.customer.name}`);
  }
}
