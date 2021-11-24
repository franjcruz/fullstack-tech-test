import { Injectable } from '@nestjs/common';

import ManholeCover from '../../domain/manhole-cover';
import { ManholeCoverCreateCommand } from '../commands/manhole-cover-create.command';

@Injectable()
export default class ManholeCoverFactory {
  public createManholeCover(
    manholeCoverCreateCommand: ManholeCoverCreateCommand,
  ): ManholeCover {
    return new ManholeCover(
      manholeCoverCreateCommand.material,
      manholeCoverCreateCommand.decoration,
      manholeCoverCreateCommand.radio,
    );
  }
}
