import Car from "../Car";

it("mock Cars", () => {
  // given
  const car = new Car();
  // 실제 내부 구현체가 수행 X
  car.drive = jest.fn().mockImplementationOnce(() => {
    console.log("나는 모킹되었다!");
    return "mocking....";
  });

  // when
  const result = car.drive();

  // then
  expect(result).toBe("mocking....");
});
