import { Optional } from 'typescript-optional';

import ManholeCover from '../manhole-cover';

export interface ManholeCoverRepository {
  createManholeCover(
    manholeCover: ManholeCover,
  ): Promise<Optional<ManholeCover>>;
}
