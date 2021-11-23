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
      manholeCoverEntity.guid,
      manholeCoverEntity.size,
      manholeCoverEntity.material,
      manholeCoverEntity.decoration,
      manholeCoverEntity.radio,
    );

    // manholeCover.setCreateAt(new Date(manholeCoverEntity.createAt)); TODO.: guid
    return Optional.of(manholeCover);
  }

  public static toDomains(
    manholeCoverEntity: ManHoleCoverEntity[],
  ): ManHoleCover[] {
    const manholeCovers = new Array<ManHoleCover>();
    manholeCoverEntity.forEach((manholeCoverEntity) => {
      const manholeCover = this.toDomain(manholeCoverEntity);
      manholeCovers.push(manholeCover.get());
    });
    return manholeCovers;
  }
}
