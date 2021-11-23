import { Injectable } from '@nestjs/common';

import MainholeCover from '../../domain/manhole-cover';
import { ManholeCoverCreateCommand } from '../commands/manhole-cover-create.command';

@Injectable()
export default class ManholeCoverFactory {
  public createManholeCover(
    manholeCoverCreateCommand: ManholeCoverCreateCommand,
  ): MainholeCover {
    return new MainholeCover(
      '',
      manholeCoverCreateCommand.size,
      manholeCoverCreateCommand.material,
      manholeCoverCreateCommand.decoration,
      manholeCoverCreateCommand.radio,
    );
  }
}
