import { Module } from '@nestjs/common';
import { WhatsappModule } from './app/providers/whatsapp/whatsapp.module';
import { UsesCasesModule } from './app/uses-cases/uses-cases.module';

@Module({
  imports: [WhatsappModule, UsesCasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
