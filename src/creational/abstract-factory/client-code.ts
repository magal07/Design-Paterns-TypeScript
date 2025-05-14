import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFatory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFatory.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
