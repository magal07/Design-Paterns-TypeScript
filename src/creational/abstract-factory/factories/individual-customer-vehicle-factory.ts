import type { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import type { VehicleProtocol } from '../vehicle/vehicle-protocol';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
