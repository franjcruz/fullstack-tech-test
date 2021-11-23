import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ApplicationModule from '../application/application.module';
import { ManholeCoverEntity } from './adapters/repository/entity/manhole-cover.entity';
import ManholeCoverRepositoryMysql from './adapters/repository/manhole-cover.repository.mysql';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import ManholeCoverController from './controllers/manhole-cover.controller';

const db_port = 'MYSQL_SERVER_PORT';
const db_name = 'MYSQL_SERVER_DBNAME';
const db_host = 'MYSQL_SERVER_HOST';
const db_username = 'MYSQL_SERVER_USERNAME';
const db_password = 'MYSQL_SERVER_PASSWORD';

@Module({})
export default class InfrastructureModule {
  static foorRoot(): DynamicModule {
    return {
      module: InfrastructureModule,
      imports: [
        ApplicationModule,
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get(db_host),
            port: +configService.get(db_port),
            username: configService.get(db_username),
            password: configService.get(db_password),
            database: configService.get(db_name),
            entities: [ManholeCoverEntity],
            synchronize: true,
          }),
          inject: [ConfigService],
        }),

        // MongooseModule.forRootAsync({}),
        TypeOrmModule.forFeature([ManholeCoverEntity]),
      ],
      controllers: [ManholeCoverController],
    };
  }
}
