import Car from "../Car";

it("spy car", () => {
  const car = new Car();
  // 실제 내부 구현체가 수행됨
  const spyCar = jest.spyOn(car, "drive");

  const result = car.drive();

  expect(spyCar).toHaveBeenCalledTimes(1);
  expect(result).toBe("vroom");
});
