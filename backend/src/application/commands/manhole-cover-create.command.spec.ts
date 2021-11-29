import { ManholeCoverCreateCommand } from './manhole-cover-create.command';

describe('ManholeCoverCreateCommand', () => {
  let manholeCover: ManholeCoverCreateCommand;

  describe('new ManholeCoverCreateCommand', () => {
    it('should return ManholeCoverCreateCommand object', async () => {
      manholeCover = new ManholeCoverCreateCommand();

      manholeCover.decoration = true;
      manholeCover.material = 'stone';
      manholeCover.radio = 10;

      expect(manholeCover.decoration).toEqual(true);
      expect(manholeCover.material).toEqual('stone');
      expect(manholeCover.radio).toEqual(10);
    });
  });
});
