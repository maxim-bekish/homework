import { repeatWord } from "../../utils/repeatWord.js";

describe("repeatWord function", () => {
  it("should return an error message for invalid input", () => {
    expect(repeatWord(123, 5)).toBe("Некорректные входные данные");
    expect(repeatWord("слово", -3)).toBe("Некорректные входные данные");
    expect(repeatWord(3, "слово")).toBe("Некорректные входные данные");
    expect(repeatWord("слово", "слово")).toBe("Некорректные входные данные");
  });

  it("should return the correct string for valid input", () => {
    expect(repeatWord("слово", 3)).toBe("слово1, слово2, слово3");
  });

  it("should return an empty string for zero repetitions", () => {
    expect(repeatWord("слово", 0)).toBe("");
  });
});
