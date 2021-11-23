import { Optional } from 'typescript-optional';

import ManHoleCover from '../../domain/manhole-cover';
import { ManHoleCoverEntity } from '../adapters/repository/entity/manhole-cover.entity';

export default class ManHoleCoverMapper {
  public static toDomain(
    manholeCoverEntity: ManHoleCoverEntity,
  ): Optional<ManHoleCover> {
    if (!manholeCoverEntity) {
      return Optional.empty<ManHoleCover>();
    }

    const manholeCover = new ManHoleCover(
      manholeCoverEntity.material,
      manholeCoverEntity.decoration,
      manholeCoverEntity.radio,
    );

    return Optional.of(manholeCover);
  }
}
