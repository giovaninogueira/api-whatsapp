import { Inject } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'http';
import { from, map, Observable } from 'rxjs';
import { IWhatsappService } from 'src/app/providers/whatsapp/iwhatsapp.service';

@WebSocketGateway({
  namespace: 'sessions',
  serveClient: true,
  cors: {
    origin: '*',
  },
})
export class CreateSessionService {
  constructor(
    @Inject(IWhatsappService)
    private readonly whatsAppService: IWhatsappService,
  ) {}

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): string {
    return 'oii';
  }

  @SubscribeMessage('identity')
  identity(@MessageBody() data: number): any {
    return { events: 'oii' };
  }

  // @SubscribeMessage('create-session')
  // async handleEvent(): Promise<number> {
  //   console.log('oiii');
  //   return 1;
  //   //await this.whatsAppService.init(data.sessionName);
  // }
}
