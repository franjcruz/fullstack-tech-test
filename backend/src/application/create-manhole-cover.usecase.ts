import { Inject, Injectable } from '@nestjs/common';
import { Optional } from 'typescript-optional';

import ManholeCover from '../domain/manhole-cover';
import { ManholeCoverRepository } from '../domain/ports/manhole-cover.repository';
import { ManholeCoverCreateCommand } from './commands/manhole-cover-create.command';
import ManholeCoverFactory from './factory/manhole-cover.factory';

@Injectable()
export default class CreateManholeCoverUseCase {
  constructor(
    @Inject('ManholeCoverRepository')
    private manholeCoverRepository: ManholeCoverRepository,
    private manholeCoverFactory: ManholeCoverFactory,
  ) {}

  public handler(
    manholeCoverCreateCommand: ManholeCoverCreateCommand,
  ): Promise<Optional<ManholeCover>> {
    const manholeCover = this.manholeCoverFactory.createManholeCover(
      manholeCoverCreateCommand,
    );

    return this.manholeCoverRepository.createManholeCover(manholeCover);
  }
}
