export abstract class IWhatsappService {
  /**
   * Init Session
   * @param { string } sessionName
   * @returns { Promise<void> }
   */
  abstract init(sessionName: string): Promise<void>;

  abstract listClients(): void;
}
