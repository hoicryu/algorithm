import React, { useState } from "react";

export const isValidParentheses = (s: string) => {
  const stack = [];
  let hasParenthesis = false;

  for (const char of s) {
    if (char === "(" || char === ")") {
      hasParenthesis = true;

      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
  }

  return hasParenthesis && stack.length === 0;
};

const Parentheses: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const checkParentheses = () => {
    if (isValidParentheses(input)) {
      setResult("소괄호가 올바르게 닫혔습니다.");
    } else {
      setResult("소괄호가 올바르게 열리고 닫히지 않았습니다.");
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2>1. 소괄호 유효성 검사기</h2>
      <textarea
        className="border"
        value={input}
        onChange={handleChange}
        placeholder="소괄호를 입력하세요."
        rows={4}
        cols={50}
      />
      <button
        className="mt-2 p-1 rounded border bg-sky-500 text-white"
        onClick={checkParentheses}
      >
        검사하기
      </button>
      <p>{result}</p>
    </div>
  );
};

export default Parentheses;
