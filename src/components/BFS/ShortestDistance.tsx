import React, { useState } from "react";

export function findShortestD(maps: number[][]): number {
  const rows: number = maps.length;
  const cols: number = maps[0].length;

  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue: [number, number, number][] = [[0, 0, 1]];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) break;
    const [x, y, distance] = current;
    if (rows - 1 === x && cols - 1 === y) return distance;

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }

  return -1;
}

const ShortestDistance: React.FC = () => {
  const [numbersArr, setNumbersArr] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const parseArray = (input: string): number[][] => {
    try {
      return JSON.parse(input);
    } catch (error) {
      alert("잘못된 배열 형식입니다. 올바르게 입력해주세요.");
      return [];
    }
  };

  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbersArr(e.target.value);
  };

  const handleCalculate = () => {
    const maps = parseArray(numbersArr);
    if (maps.length > 0) {
      const shortestDistance = findShortestD(maps);
      setResult(shortestDistance);
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="font-semibold">1. 최단거리</h2>
      <div className="mt-4">
        <p>
          설명: n x m 크기의 맵에서 도착지에 도착할 수 있는 최소 이동 경로를
          구하라
        </p>
        <p>
          maps는 [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]와
          같은 중복배열로 주어진다.
        </p>
        <p>1은 이동할 수 있는 지역, 0은 이동할 수 없는 지역이다.</p>
      </div>
      <div className="mt-5">
        <div className="flex flex-col items-center">
          <label>위 예시 배열처럼 maps에 대한 배열을 입력해주세요.</label>
          <input
            className="mt-2 border rounded"
            type="text"
            value={numbersArr}
            onChange={handleNumbersChange}
            placeholder="[[1,0,1],[1,1,1],[0,0,1]]"
          />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleCalculate}
          >
            최단거리 계산
          </button>
        </div>
        {result !== null && (
          <div className="mt-4">
            <p>최단 거리: {result !== -1 ? result : "도착할 수 없습니다."}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortestDistance;
