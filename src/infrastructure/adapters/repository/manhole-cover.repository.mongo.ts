import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Optional } from 'typescript-optional';

import ManholeCover from '../../../domain/manhole-cover';
import { ManholeCoverRepository } from '../../../domain/ports/manhole-cover.repository';
import ManholeCoverMapper from '../../mapper/manhole-cover.mapper';
import { ManHoleCoverEntity } from './entity/manhole-cover.entity';

@Injectable()
export default class ManholeCoverRepositoryMongo
  implements ManholeCoverRepository
{
  constructor(
    @InjectModel('ManholeCover')
    private readonly manholeCoverModel: Model<ManHoleCoverEntity>,
  ) {}

  public async createManholeCover(
    manholeCover: ManholeCover,
  ): Promise<Optional<ManholeCover>> {
    console.log('manholeCover BBBBB:>> ', manholeCover);
    let manholeCoverCreated = new this.manholeCoverModel(manholeCover);
    console.log('manholeCoverCreated :>> ', manholeCoverCreated);
    manholeCoverCreated = await manholeCoverCreated.save();
    return ManholeCoverMapper.toDomain(manholeCoverCreated);
  }
}
