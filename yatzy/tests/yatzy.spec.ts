import Yatzy from "../src/yatzy";

describe("Yatzy's Upper section", () => {
  it("ones 메서드는 1을 필터링해서 더한 값을 반환합니다..", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(1, 2, 1, 4, 1);
    expect(yatzy1.aces()).toBe(2);
    expect(yatzy2.aces()).toBe(3);
  });

  it("twos 메서드는 2를 필터링해서 더한 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(1, 2, 2, 4, 2);
    expect(yatzy1.twos()).toBe(2);
    expect(yatzy2.twos()).toBe(6);
  });

  it("threes 메서드는 3을 필터링해서 더한 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(1, 3, 3, 3, 3);
    expect(yatzy1.threes()).toBe(0);
    expect(yatzy2.threes()).toBe(12);
  });

  it("fours 메서드는 4를 필터링해서 더한 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(4, 4, 4, 5, 5);
    expect(yatzy1.fours()).toBe(4);
    expect(yatzy2.fours()).toBe(12);
  });

  it("fives 메서드는 5를 필터링해서 더한 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(4, 4, 5, 5, 5);
    expect(yatzy1.fives()).toBe(5);
    expect(yatzy2.fives()).toBe(15);
  });

  it("sixes 메서드는 6을 필터링해서 더한 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 1, 4, 5);
    const yatzy2 = new Yatzy(4, 4, 6, 5, 5);
    expect(yatzy1.sixes()).toBe(0);
    expect(yatzy2.sixes()).toBe(6);
  });
});

describe("Yatzy's Lower section", () => {
  it("chance 메서드는 모든 dice 눈의 합을 넘긴 값을 반환합니다.", () => {
    const yatzy1 = new Yatzy(1, 2, 3, 4, 5);
    const yatzy2 = new Yatzy(1, 3, 3, 4, 5);

    expect(yatzy1.chance()).toBe(15);
    expect(yatzy2.chance()).toBe(16);
  });

  it("ThreeOfAKind 메서드는 3개의 눈이 동일할 때, 주사위 5개의 합을 반환합니다..", () => {
    const yatzy = new Yatzy(3, 3, 3, 4, 4);

    expect(yatzy.threeOfAKind()).toBe(17);
  });

  it("ThreeOfAKind 메서드는 3개의 눈이 동일하지 않는 경우, 에러를 반환합니다...", () => {
    const yatzy = new Yatzy(3, 3, 3, 3, 4);

    expect(() => yatzy.threeOfAKind()).toThrow("No three of a kind");
  });

  it("FourOfAKind 메서드는 4개의 눈이 동일할 때, 주사위 5개의 합을 반환합니다..", () => {
    const yatzy = new Yatzy(3, 3, 3, 3, 4);

    expect(yatzy.fourOfAKind()).toBe(16);
  });

  it("FourOfAKind 메서드는 4개의 눈이 동일하지 않는 경우, 에러를 반환합니다...", () => {
    const yatzy = new Yatzy(3, 3, 3, 3, 3);

    expect(() => yatzy.fourOfAKind()).toThrow("No four of a kind");
  });

  it("FullHouse 메서드는 3개의 눈이 동일하고, 2개의 눈이 동일할 때, 주사위 5개의 합을 반환합니다..", () => {
    const yatzy = new Yatzy(3, 3, 3, 4, 4);

    expect(yatzy.fullHouse()).toBe(17);
  });

  it("FullHouse 메서드는 3개의 눈이 동일하지 않거나, 2개의 눈이 동일하지 않는 경우, 에러를 반환합니다...", () => {
    const yatzy = new Yatzy(3, 3, 3, 4, 5);

    expect(() => yatzy.fullHouse()).toThrow("No full house");
  });

  it("Yahtzee 메서드는 5개의 눈이 동일할 때, 50을 반환하고, yatzee 값을 true로 바꿉니다.", () => {
    const yatzy = new Yatzy(3, 3, 3, 3, 3);

    expect(yatzy.yahtzee()).toBe(50);
    expect(yatzy.yatzee).toBe(true);
  });

  it("Yahtzee 메서드는 5개의 눈이 동일하지 않을 때, 에러를 반환합니다...", () => {
    const yatzy = new Yatzy(3, 3, 3, 3, 4);

    expect(() => yatzy.yahtzee()).toThrow("No yahtzee");
  });

  it("smallStraight 메서드는 4개 이상의 수가 연속일 때, 30점을 반환합니다...", () => {
    const yatzy1 = new Yatzy(1, 2, 3, 4, 6);
    const yatzy2 = new Yatzy(1, 2, 3, 4, 5);

    expect(yatzy1.smallStraight()).toBe(30);
    expect(yatzy2.smallStraight()).toBe(30);
  });

  it("smallStraight 메서드는 4개 이상의 수가 연속이 아닐 때, 에러를 반환합니다...", () => {
    const yatzy1 = new Yatzy(1, 2, 3, 5, 6);
    const yatzy2 = new Yatzy(1, 2, 4, 5, 6);

    expect(() => yatzy1.smallStraight()).toThrow("No small straight");
    expect(() => yatzy2.smallStraight()).toThrow("No small straight");
  });

  it("largeStraight 메서드는 5개의 수가 연속일 때, 40점을 반환합니다...", () => {
    const yatzy1 = new Yatzy(1, 2, 3, 4, 5);
    const yatzy2 = new Yatzy(3, 2, 4, 5, 6);

    expect(yatzy1.largeStraight()).toBe(40);
    expect(yatzy2.largeStraight()).toBe(40);
  });

  it("largeStraight 메서드는 5개의 수가 연속이 아닐 때, 에러를 반환합니다...", () => {
    const yatzy1 = new Yatzy(1, 2, 3, 4, 6);
    const yatzy2 = new Yatzy(2, 2, 4, 5, 6);

    expect(() => yatzy1.largeStraight()).toThrow("No large straight");
    expect(() => yatzy2.largeStraight()).toThrow("No large straight");
  });
});
