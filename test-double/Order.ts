import MailService from "./MailService";

export default class Order {
  mailer?: MailService;

  constructor(private readonly name: string, private readonly price: number) {}
  setMailer(mailer: MailService) {
    this.mailer = mailer;
  }

  confirm() {
    this.mailer?.send(
      `주문이 완료되었습니다. 상품명: ${this.name}, 가격: ${this.price}`
    );
  }
}
