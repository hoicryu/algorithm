import { isValidParentheses } from "./Parentheses";

describe("isValidParentheses", () => {
  test("올바른 소괄호 문자열", () => {
    expect(isValidParentheses("()")).toBe(true);
    expect(isValidParentheses("(())")).toBe(true);
    expect(isValidParentheses("()()")).toBe(true);
  });

  test("잘못된 소괄호 문자열", () => {
    expect(isValidParentheses("(")).toBe(false);
    expect(isValidParentheses(")")).toBe(false);
    expect(isValidParentheses("(()")).toBe(false);
    expect(isValidParentheses("())")).toBe(false);
    expect(isValidParentheses(")(")).toBe(false);
  });

  test("소괄호가 없는 문자열", () => {
    expect(isValidParentheses("abc")).toBe(false);
    expect(isValidParentheses("123")).toBe(false);
    expect(isValidParentheses("")).toBe(false);
  });
});
