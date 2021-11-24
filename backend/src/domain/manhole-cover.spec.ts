import BadMaterialManholeCoverGivenException from './exceptions/bad-material-manhole-cover-given.exception';
import RadioManholeCoverLessTenException from './exceptions/radio-manhole-cover-less-ten.exception';
import ManholeCover from './manhole-cover';

describe('ManholeCover Domain', () => {
  let manholeCover: ManholeCover;

  describe('Creation ManholeCover', () => {
    it('should return ManholeCover object', async () => {
      manholeCover = new ManholeCover('stone', false, 16);

      expect(manholeCover).toHaveProperty('guid');
      expect(manholeCover).toHaveProperty('size');
      expect(manholeCover).toHaveProperty('material');
      expect(manholeCover).toHaveProperty('decoration');
      expect(manholeCover).toHaveProperty('radio');
    });

    it('should have a correct size with S', async () => {
      manholeCover = new ManholeCover('iron', true, 11);

      expect(manholeCover.size).toEqual('S');
    });
    it('should have a correct size with M', async () => {
      manholeCover = new ManholeCover('iron', true, 18);

      expect(manholeCover.size).toEqual('M');
    });
    it('should have a correct size with L', async () => {
      manholeCover = new ManholeCover('iron', true, 22);

      expect(manholeCover.size).toEqual('L');
    });
    it('should have a correct size with XL', async () => {
      manholeCover = new ManholeCover('iron', true, 26);

      expect(manholeCover.size).toEqual('XL');
    });
    it('should have an error with size', async () => {
      expect(() => new ManholeCover('iron', true, 5)).toThrowError(
        RadioManholeCoverLessTenException,
      );
    });
    it('should have an error with material', async () => {
      expect(() => new ManholeCover('iro', true, 15)).toThrowError(
        BadMaterialManholeCoverGivenException,
      );
    });
  });
});
