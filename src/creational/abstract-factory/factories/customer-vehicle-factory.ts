import type { Customer } from '../customer/customer';
import type { VehicleProtocol } from '../vehicle/vehicle-protocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
