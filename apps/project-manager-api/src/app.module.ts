import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './gateways/controllers/controllers.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuardService } from './gateways/guards/auth-guard.service';

@Module({
  imports: [ControllersModule, DomainModule, InfrastructureModule, GatewaysModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService,
    },
  ],
})

export class AppModule {}
