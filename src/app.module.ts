import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [MemberModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
