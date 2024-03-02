const fizzBuzz = require("../src/fizzbuzz");

describe("fizzBuzz", () => {
  test("When Given a number N, it returns an array from 1 to the number N", () => {
    // Arrange - SETUP FOR THE TEST
    let N = 2;
    let expected = [1, 2];

    // Act - CALL YOUR METHOD (BUSINESS LOGIC)
    let actual = fizzBuzz(N);

    // Assert - WHAT YOU WANT TO HAPPEN
    expect(actual).toEqual(expected);
  });

  test("숫자가 3으로 나누어 떨어지면 Fizz를 출력한다", () => {
    // Arrange
    let N = 3;
    let expected = [1, 2, "Fizz"];

    // Act
    let actual = fizzBuzz(N);

    // Assert
    expect(actual).toEqual(expected);
  });

  test("숫자가 5로 나누어 떨어지면 Buzz를 출력한다", () => {
    // Arrange
    let N = 10;
    let expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];

    // Act
    let actual = fizzBuzz(N);

    // Assert
    expect(actual).toEqual(expected);
  });

  test("숫자가 3과 5로 나누어 떨어지면 FizzBuzz를 출력한다", () => {
    // Arrange
    let N = 30;
    let expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
      17,
      "Fizz",
      19,
      "Buzz",
      "Fizz",
      22,
      23,
      "Fizz",
      "Buzz",
      26,
      "Fizz",
      28,
      29,
      "FizzBuzz",
    ];

    // Act
    let actual = fizzBuzz(N);

    // Assert
    expect(actual).toEqual(expected);
  });
});
