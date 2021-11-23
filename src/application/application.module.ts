import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import DomainModule from '../domain/domain.module';
import ManholeCoverRepositoryMongo from '../infrastructure/adapters/repository/manhole-cover.repository.mongo';
import ManholeCoverSchema from '../infrastructure/adapters/repository/schema/manhole-cover.schema';
import CreateManholeCoverUseCase from './create-manhole-cover.usecase';
import ManholeCoverFactory from './factory/manhole-cover.factory';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'ManholeCover',
        schema: ManholeCoverSchema,
      },
    ]),
  ],
  providers: [
    ManholeCoverFactory,
    CreateManholeCoverUseCase,
    {
      provide: 'ManholeCoverRepository',
      useClass: ManholeCoverRepositoryMongo,
    },
  ],
  exports: [ManholeCoverFactory, CreateManholeCoverUseCase],
})
export default class ApplicationModule {}
