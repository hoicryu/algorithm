import React, { useState } from "react";

const findTargetNumberCount = (numbers: number[], target: number): number => {
  let count = 0;

  const dfs = (index: number, currentSum: number) => {
    if (index === numbers.length) {
      if (currentSum === target) count++;
      return;
    }

    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  };

  dfs(0, 0);
  return count;
};

const FindTargetNum: React.FC = () => {
  const [numbersInput, setNumbersInput] = useState<string>("");
  const [target, setTarget] = useState<number | "">("");
  const [count, setCount] = useState<number | null>(null);

  const handleNumbersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumbersInput(event.target.value);
  };

  const handleTargetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTarget(value === "" ? "" : Number(value));
  };

  const handleCalculate = () => {
    const numbers = numbersInput
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    if (target === "" || isNaN(target)) {
      alert("Please enter a valid target number.");
      return;
    }

    const result = findTargetNumberCount(numbers, target);
    setCount(result);
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="font-semibold"> 숫자들의 조합으로 목표숫자만들기</h2>
      <div className="mt-4">
        <div>
          <label>
            숫자들 (콤마로 구분해주세요):
            <input
              className="ml-2 border rounded"
              type="text"
              value={numbersInput}
              onChange={handleNumbersChange}
            />
          </label>
        </div>
        <div className="mt-2">
          <label>
            목표숫자
            <input
              className="ml-2 border rounded"
              type="number"
              value={target === "" ? "" : target}
              onChange={handleTargetChange}
            />
          </label>
        </div>
        <button
          className="mt-4 p-1 text-white border rounded bg-sky-400"
          onClick={handleCalculate}
        >
          계산하기
        </button>
        {count !== null && (
          <p className="mt-5">
            목표숫자 조합 방법수<span className="font-semibold"> {count}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default FindTargetNum;
