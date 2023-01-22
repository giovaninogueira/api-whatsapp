import { Module } from '@nestjs/common';
import { IWhatsappService } from './iwhatsapp.service';
import { WhatsappService } from './whatsapp.service';

const providerWhatsAPP = {
  provide: IWhatsappService,
  useClass: WhatsappService,
};

@Module({
  providers: [providerWhatsAPP],
  exports: [providerWhatsAPP],
})
export class WhatsappModule {}
