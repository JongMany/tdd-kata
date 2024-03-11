type DiceNum = 1 | 2 | 3 | 4 | 5 | 6;

type DiceCountMapper = {
  [key in DiceNum]: number;
};

export default class Yatzy {
  private readonly dice: DiceNum[];
  private readonly diceCountMapper: DiceCountMapper;
  private yatzy = false;

  constructor(d1: DiceNum, d2: DiceNum, d3: DiceNum, d4: DiceNum, d5: DiceNum) {
    this.dice = [d1, d2, d3, d4, d5];
    this.diceCountMapper = this.dice.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: (acc[cur as DiceNum] || 0) + 1,
      }),
      {} as DiceCountMapper
    );
  }

  get yatzee() {
    return this.yatzy;
  }

  // upper section
  aces(): number {
    return this.singles(1);
  }
  twos(): number {
    return this.singles(2);
  }
  threes(): number {
    return this.singles(3);
  }
  fours(): number {
    return this.singles(4);
  }
  fives(): number {
    return this.singles(5);
  }
  sixes(): number {
    return this.singles(6);
  }

  // lower section
  chance(): number {
    return this.dice.reduce((acc, curr) => acc + curr, 0);
  }

  threeOfAKind(): number {
    if (this.checkQuantity(3)) {
      return this.dice.reduce((acc, curr) => acc + curr, 0);
    } else {
      throw new Error("No three of a kind");
    }
  }

  fourOfAKind(): number {
    if (this.checkQuantity(4)) {
      return this.dice.reduce((acc, curr) => acc + curr, 0);
    } else {
      throw new Error("No four of a kind");
    }
  }

  fullHouse(): number {
    if (this.checkQuantity(3) && this.checkQuantity(2)) {
      return this.dice.reduce((acc, curr) => acc + curr, 0);
    } else {
      throw new Error("No full house");
    }
  }

  yahtzee(): number {
    if (this.checkQuantity(5)) {
      this.yatzy = true;
      return 50;
    } else {
      throw new Error("No yahtzee");
    }
  }

  // 4개의 눈이 연속일 때 30점
  smallStraight(): number {
    if (this.checkDiceSequence(4)) {
      return 30;
    } else {
      throw new Error("No small straight");
    }
  }

  // 5개의 눈이 연속일 때 40점
  largeStraight(): number {
    if (this.checkDiceSequence(5)) {
      return 40;
    } else {
      throw new Error("No large straight");
    }
  }

  /**
   * @description
   * 한 개의 값만을 필터링해서 더해주는 메서드
   * */
  private singles(n: number): number {
    return this.dice
      .filter((d) => d === n)
      .reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * @description
   * 원하는 중복 개수를 체크하는 함수
   */
  private checkQuantity(count: DiceNum) {
    return Object.values(this.diceCountMapper).some((v) => v === count);
  }

  /**
   * @description
   * 눈이 연속인지 체크하는 함수
   *  */
  private checkDiceSequence(seqCount = 4): boolean {
    // const sortedDice = this.dice.sort((a, b) => a - b);
    const initialValue: number[] = Array(6).fill(0);
    const bucket = this.dice.reduce((acc, cur) => {
      acc[cur - 1] = (acc[cur - 1] || 0) + 1;
      return acc;
    }, initialValue);

    let seq = 0;
    let tempSeq = 0;
    for (const cnt of bucket) {
      if (cnt > 0) {
        seq++;
        if (seq === seqCount) {
          return true;
        }
      } else {
        tempSeq = seq;
        seq = 0;
      }
    }

    if (seq === seqCount) {
      return true;
    } else if (tempSeq === seqCount) {
      return true;
    } else {
      return false;
    }
  }
}
