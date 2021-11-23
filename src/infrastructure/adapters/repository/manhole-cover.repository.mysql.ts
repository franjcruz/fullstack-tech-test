import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Optional } from 'typescript-optional';

import ManholeCover from '../../../domain/manhole-cover';
import { ManholeCoverRepository } from '../../../domain/ports/manhole-cover.repository';
import ManholeCoverMapper from '../../mapper/manhole-cover.mapper';
import { ManholeCoverEntity } from './entity/manhole-cover.entity';

@Injectable()
export default class ManholeCoverRepositoryMysql
  implements ManholeCoverRepository
{
  constructor(
    @InjectRepository(ManholeCoverEntity)
    private readonly manholeCoverModel: Repository<ManholeCoverEntity>,
  ) {}

  public async createManholeCover(
    manholeCover: ManholeCover,
  ): Promise<Optional<ManholeCover>> {
    console.log('manholeCover BBBBB:>> ', manholeCover);
    const manholeCoverCreated = await this.manholeCoverModel.save(manholeCover);
    console.log('manholeCoverCreated :>> ', manholeCoverCreated);
    return ManholeCoverMapper.toDomain(manholeCoverCreated);
  }
}
