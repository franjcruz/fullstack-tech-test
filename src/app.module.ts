import { DynamicModule, Module } from '@nestjs/common';

import ApplicationModule from './application/application.module';
import DomainModule from './domain/domain.module';
import InfrastructureModule from './infrastructure/infrastructure.module';

@Module({})
export default class AppModule {
  static foorRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DomainModule,
        ApplicationModule,
        InfrastructureModule.foorRoot(),
      ],
    };
  }
}
