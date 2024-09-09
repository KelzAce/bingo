import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/database/data-source';
import { AuthModule } from './auth/auth.module';
import { KycModule } from './kyc/kyc.module';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), AuthModule, KycModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
