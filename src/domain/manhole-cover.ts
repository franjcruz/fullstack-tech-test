import { v4 as uuidv4 } from 'uuid';

import BadMaterialManholeCoverGivenException from './exceptions/bad-material-manhole-cover-given.exception';
import RadioManholeCoverLessTenException from './exceptions/radio-manhole-cover-less-ten.exception';

export default class MainholeCover {
  guid: string;
  size: string;
  material: string;
  decoration: boolean;
  radio: number;

  constructor(material: string, decoration: boolean, radio: number) {
    this.guid = uuidv4();
    this.material = material;
    this.decoration = decoration;
    this.radio = radio;

    this.validateRadio();
    this.validateMaterial();
    this.calculateSize();
  }

  public validateRadio(): void {
    if (this.radio < 10) {
      throw new RadioManholeCoverLessTenException(
        'The radio should be at least ten',
      );
    }
  }

  public validateMaterial(): void {
    if (
      this.material !== 'iron' &&
      this.material !== 'steel' &&
      this.material !== 'stone'
    ) {
      throw new BadMaterialManholeCoverGivenException(
        'The material used must be iron, steel or stone',
      );
    }
  }
  public calculateSize(): void {
    if (this.radio < 15) {
      this.size = 'S';
    } else if (this.radio < 20) {
      this.size = 'M';
    } else if (this.radio < 25) {
      this.size = 'L';
    } else {
      this.size = 'XL';
    }
  }
}
