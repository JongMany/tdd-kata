let randomNumber: jest.Mock<any, any> = jest
  .mock("./randomNumber")
  .fn()
  .mockReturnValue(42);

describe("randomNumber 테스트", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    randomNumber.mockReturnValue(42);
  });
  it("should return 42", () => {
    const result = randomNumber();

    expect(result).toBe(42);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
  it("should return same number", () => {
    const random1 = randomNumber();
    const random2 = randomNumber();

    expect(random1).toBe(42);
    expect(random2).toBe(42);

    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
});
