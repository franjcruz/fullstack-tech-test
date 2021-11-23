import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManholeCoverEntity } from 'src/infrastructure/adapters/repository/entity/manhole-cover.entity';

import DomainModule from '../domain/domain.module';
import ManholeCoverRepositoryMysql from '../infrastructure/adapters/repository/manhole-cover.repository.mysql';
import CreateManholeCoverUseCase from './create-manhole-cover.usecase';
import ManholeCoverFactory from './factory/manhole-cover.factory';

@Module({
  imports: [DomainModule, TypeOrmModule.forFeature([ManholeCoverEntity])],
  providers: [
    ManholeCoverFactory,
    CreateManholeCoverUseCase,
    {
      provide: 'ManholeCoverRepository',
      useClass: ManholeCoverRepositoryMysql,
    },
  ],
  exports: [ManholeCoverFactory, CreateManholeCoverUseCase],
})
export default class ApplicationModule {}
