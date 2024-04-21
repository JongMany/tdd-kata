const consoleLog = console.log;
test("spyOn method로 console.log를 모킹하면 consoel.ㅣlog는 다른 함수가 된다.", () => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  const consoleLogMock = console.log;

  expect(consoleLogMock).not.toBe(consoleLog);

  jest.restoreAllMocks();
  const consoleLogAfterRestore = console.log;
  expect(consoleLogAfterRestore).toBe(consoleLog);
});

describe("clearMock 테스트", () => {
  describe("mock 함수를 초기화한 후, mockClear를 초기화하면", () => {
    it("mock.calls는 초기화됨", () => {
      const mockFn = jest.fn().mockReturnValue(42);
      mockFn("1");
      mockFn("1", "2");

      expect(mockFn.mock.calls[0]).toEqual(["1"]);
      expect(mockFn.mock.calls[1]).toEqual(["1", "2"]);

      mockFn.mockClear();

      expect(mockFn.mock.calls).toEqual([]);
    });

    it("내부 구현은 초기화 되지 않음", () => {
      const mockFn = jest.fn().mockReturnValue(42);
      mockFn("1");

      mockFn.mockClear();

      expect(mockFn()).toBe(42);
    });

    it("mock.instances는 초기화됨", () => {
      const MockClass = jest.fn();
      const a = new MockClass();
      const b = new MockClass();

      expect(MockClass.mock.instances).toHaveLength(2);
      expect(MockClass.mock.instances).toEqual([a, b]);

      MockClass.mockClear();
      expect(MockClass.mock.instances).toHaveLength(0);
    });
  });
});

describe("mockReset 테스트", () => {
  describe("mock 함수를 초기화한 후, mockReset을 초기화하면", () => {
    it("mock.calls는 초기화됨", () => {
      const mockFn = jest.fn().mockReturnValue(42);
      mockFn("1");
      mockFn("1", "2");

      expect(mockFn.mock.calls[0]).toEqual(["1"]);
      expect(mockFn.mock.calls[1]).toEqual(["1", "2"]);

      mockFn.mockReset();

      expect(mockFn.mock.calls).toEqual([]);
    });

    it("내부 구현은 초기화 됨", () => {
      const mockFn = jest.fn().mockReturnValue(42);
      mockFn("1");

      mockFn.mockReset();

      expect(mockFn()).toBeUndefined();
    });

    it("mock.instances는 초기화됨", () => {
      const MockClass = jest.fn();
      const a = new MockClass();
      const b = new MockClass();

      expect(MockClass.mock.instances).toHaveLength(2);
      expect(MockClass.mock.instances).toEqual([a, b]);

      MockClass.mockReset();
      expect(MockClass.mock.instances).toHaveLength(0);
    });
  });
});

describe("mockRestore 테스트", () => {
  it("mockRestore를 호출하면, mock 함수가 원래의 함수로 복원됨", () => {
    const add = (a: number, b: number) => a + b;
    const mockFn = jest.fn().mockImplementation(add);
    expect(mockFn(1, 2)).toBe(3);
    expect(mockFn.getMockImplementation()).toBe(add);
    mockFn.mockRestore();

    expect(mockFn(1, 2)).toBeUndefined();
    expect(mockFn()).toBeUndefined();
  });

  const someModule = { api: () => "original" };

  it("spyOn으로 테스트 더블을 만든 뒤엔, someModule.api는 다른 함수가 되어버린다", () => {
    const originApi = someModule.api;
    // 여기서 바뀌어 버림
    const mockApi = jest
      .spyOn(someModule, "api")
      .mockImplementation(() => "mock");

    // mockApi.mockRestore(); // 이게 실행되고 아니고가 다음 테스트에 영향을 줌

    const changeApi = someModule.api;
    expect(originApi).not.toBe(changeApi);
    expect(changeApi()).toBe("mock");
  });

  const anotherModule = { api: () => "original" };
  it("spyOn으로 테스트 더블을 만든 뒤에 mockRestore를 호출하면, 원래 함수로 복원됨", () => {
    const originApi = anotherModule.api;
    const mockApi = jest
      .spyOn(anotherModule, "api")
      .mockImplementation(() => "mock");

    expect(mockApi()).toBe("mock");
    mockApi.mockRestore();
    expect(mockApi()).toBeUndefined();

    const changeApi = anotherModule.api;
    expect(originApi).toBe(changeApi);
    expect(changeApi()).toBe("original");
  });
});
