import Order from "../Order";
import MailServiceStub from "./MailServiceStub";

describe("Order (stub)", () => {
  it("confirm 했을 때 메일을 발송한다", () => {
    // Arrange
    const order = new Order("커피", 1500);
    const mailService = new MailServiceStub();
    order.setMailer(mailService);

    // Act
    order.confirm();

    // Assert
    expect(mailService.numberSent()).toBe(1);
  });
});
