import { Module } from '@nestjs/common';
import { CreateSessionService } from './create-session.service';
import { WhatsappModule } from 'src/app/providers/whatsapp/whatsapp.module';

@Module({
  imports: [WhatsappModule],
  providers: [CreateSessionService],
  controllers: [],
})
export class CreateSessionModule {}
