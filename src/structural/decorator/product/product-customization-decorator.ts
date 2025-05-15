import { ProductDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' Customized';
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
