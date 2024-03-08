import MailService from "../MailService";
import Order from "../Order";

describe("Order (mock)", function () {
  beforeEach(() => jest.clearAllMocks());

  it("confirm 했을 때 메일을 발송한다.", function () {
    // given
    const mailService = new MailService();
    mailService.send = jest.fn();
    const mailServiceSend = mailService.send;
    const order = new Order("name", 15000);
    order.setMailer(mailService);

    // when
    order.confirm();

    // then
    expect(mailServiceSend).toBeCalledTimes(1);
  });
});
