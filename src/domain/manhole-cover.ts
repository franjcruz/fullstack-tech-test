import PriceProductLessZeroException from './exceptions/price-product-less-zero.exception';

export default class MainholeCover {
  private guid: string;

  private readonly size: string;

  private readonly material: string;

  private readonly decoration: boolean;

  private readonly radio: number;

  constructor(
    guid: string,
    size: string,
    material: string,
    decoration: boolean,
    radio: number,
  ) {
    this.guid = guid;
    this.size = size;
    this.material = material;
    this.decoration = decoration;
    this.radio = radio || 0;
    this.validatePrice();
  }

  public validatePrice(): void {
    if (this.radio <= 0) {
      throw new PriceProductLessZeroException(
        'The price product should be greater than zero',
      );
    }
  }

  public getSize(): string {
    return this.size;
  }

  public getId(): string {
    return this.guid;
  }
}
