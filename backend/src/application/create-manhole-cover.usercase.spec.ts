import ManholeCover from './../domain/manhole-cover';
import { ManholeCoverRepository } from './../domain/ports/manhole-cover.repository';
import CreateManholeCoverUseCase from './create-manhole-cover.usecase';
import ManholeCoverFactory from './factory/manhole-cover.factory';

jest.mock('./../domain/manhole-cover');

describe('CreateManholeCoverUseCase', () => {
  let createManholeCoverData: CreateManholeCoverUseCase;
  let mockManholeCoverRepository: ManholeCoverRepository;

  let createManholeCoverUseCase: CreateManholeCoverUseCase;
  let mockManholeCoverFactory: ManholeCoverFactory;

  beforeEach(() => {
    (ManholeCover as jest.Mock).mockClear();

    mockManholeCoverRepository = {} as ManholeCoverRepository;
    mockManholeCoverRepository.createManholeCover = jest.fn();

    mockManholeCoverFactory = {} as ManholeCoverFactory;
    mockManholeCoverFactory.createManholeCover = jest.fn();

    createManholeCoverData = new CreateManholeCoverUseCase(
      mockManholeCoverRepository,
      mockManholeCoverFactory,
    );
  });

  describe('Creation ManholeCover', () => {
    it('should create new dummy using given data', async () => {
      const manholeCover: ManholeCover = new ManholeCover('stone', false, 16);

      await createManholeCoverData.handler(manholeCover);

      expect(ManholeCover).toHaveBeenCalled();
    });

    it('should save created dummy using repository', async () => {
      const createdManholeCover: ManholeCover = new ManholeCover(
        'stone',
        false,
        16,
      );
      (ManholeCover as jest.Mock).mockImplementation(() => createdManholeCover);

      await createManholeCoverData.handler(
        new ManholeCover('stone', false, 16),
      );

      expect(mockManholeCoverRepository.createManholeCover).toHaveBeenCalled();
    });
  });
});
