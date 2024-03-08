import MailService from "../MailService";

export default class MailServiceStub extends MailService {
  messages: string[];

  constructor() {
    super();
    this.messages = [];
  }

  override send(message: string) {
    this.messages.push(message);
  }

  numberSent() {
    return this.messages.length;
  }
}
