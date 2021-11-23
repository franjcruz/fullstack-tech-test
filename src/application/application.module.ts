import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import DomainModule from '../domain/domain.module';
import ProductRepositoryMongo from '../infrastructure/adapters/repository/product.repository.mongo';
import ProductSchema from '../infrastructure/adapters/repository/schema/product.schema';
import CreateManholeCoverUseCase from './create-manhole-cover.usecase';
import ManholeCoverFactory from './factory/manhole-cover.factory';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [
    ManholeCoverFactory,
    CreateManholeCoverUseCase,
    {
      provide: 'ProductRepository',
      useClass: ProductRepositoryMongo,
    },
  ],
  exports: [ManholeCoverFactory, CreateManholeCoverUseCase],
})
export default class ApplicationModule {}
