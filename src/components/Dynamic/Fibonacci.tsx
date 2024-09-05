import React, { useState } from "react";

export const fibonacci = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

// 반복문
// export const fibonacci = (n: number): number => {
//   if (n <= 1) {
//     return n;
//   }
//   let prev = 0,
//     cur = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = prev + cur;
//     prev = cur;
//     cur = next;
//   }
//   return cur;
// };

const Fibonacci: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<number | string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleCalculate = () => {
    if (number !== "") {
      const num = parseInt(number);
      if (!isNaN(num)) {
        const fibResult = fibonacci(num);
        setResult(fibResult);
      } else {
        setResult("숫자를 입력해주세요.");
      }
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2>피보나치 계산기</h2>
      <input
        className="p-1 border rounded"
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="숫자를 입력하세요"
      />
      <button
        className="mt-2 p-1 border rounded bg-sky-400 text-white"
        onClick={handleCalculate}
      >
        계산하기
      </button>
      {result !== null && <p>결과: {result}</p>}
    </div>
  );
};

export default Fibonacci;
