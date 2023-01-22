import { Injectable, Logger } from '@nestjs/common';
import { OPTIONS_BOT } from 'src/envs/whatsapp.env';
import { create, Message, Whatsapp } from 'venom-bot';
import { IWhatsappService } from './iwhatsapp.service';

@Injectable()
export class WhatsappService implements IWhatsappService {
  private logger = new Logger(WhatsappService.name);

  /**
   * @var { Whatsapp[] } client
   */
  private static clients: Array<{ session: string; client: Whatsapp }> = [];

  /**
   * @inheritdoc
   */
  public async init(sessionName: string): Promise<void> {
    try {
      const catchQR = undefined;
      const statusFind = undefined;
      const client = await create(
        sessionName,
        catchQR,
        statusFind,
        OPTIONS_BOT,
      );

      WhatsappService.clients.push({
        session: sessionName,
        client,
      });

      this.listenMessages(client);
    } catch (error) {
      this.logger.error(error);
    }
  }

  /**
   * Listen messages
   */
  private listenMessages(client: Whatsapp) {
    client.onMessage(async (message: Message) => {
      console.log(message.body);
    });
  }

  listClients() {
    console.log(WhatsappService.clients);
  }

  /**
   * Find client by session
   * @param { string } sessionName
   * @returns { Whatsapp }
   */
  private findClientBySession(sessionName: string): Whatsapp {
    const session = WhatsappService.clients.find(
      (client) => client.session === sessionName,
    );

    return session.client;
  }
}
