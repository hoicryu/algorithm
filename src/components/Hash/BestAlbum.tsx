import React, { useState } from "react";

interface Song {
  id: number;
  plays: number;
}

interface GenreData {
  totalPlays: number;
  songs: Song[];
}

export function getBestAlbum(genres: string[], plays: number[]): number[] {
  const map: Map<string, GenreData> = new Map();

  genres.forEach((genre, idx) => {
    if (!map.has(genre)) {
      map.set(genre, { totalPlays: 0, songs: [] });
    }
    const genreData = map.get(genre)!;
    genreData.totalPlays += plays[idx];
    genreData.songs.push({ id: idx, plays: plays[idx] });
  });

  const sortedGenres = [...map.entries()].sort(
    (a, b) => b[1].totalPlays - a[1].totalPlays
  );

  const result: number[] = [];

  sortedGenres.forEach(([genre, data]) => {
    data.songs.sort((a, b) => b.plays - a.plays || a.id - b.id);
    result.push(data.songs[0].id);
    if (data.songs.length > 1) result.push(data.songs[1].id);
  });

  return result;
}

const BestAlbum: React.FC = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [plays, setPlays] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([]);

  const handleSubmit = () => {
    const bestAlbum = getBestAlbum(genres, plays);
    setResult(bestAlbum);
  };

  const handleGenresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenres(e.target.value.split(","));
  };

  const handlePlaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlays(e.target.value.split(",").map(Number));
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="font-semibold">1. 베스트앨범</h2>
      <div className="mt-4">
        <p>
          노래의 장르를 나타내는 문자열 배열과 노래별 재생 횟수를 입력하세요:
        </p>
        <div className="flex flex-col items-center mt-10">
          <input
            type="text"
            placeholder='["classic", "pop", "classic", "classic", "pop"]'
            onChange={handleGenresChange}
            className="border p-2"
          />
          <input
            type="text"
            placeholder="[500, 600, 150, 800, 2500]"
            onChange={handlePlaysChange}
            className="p-2 mt-2 border"
          />
          <button
            onClick={handleSubmit}
            className="p-2 mt-4 bg-blue-500 text-white "
          >
            베스트 앨범 생성
          </button>
        </div>
        <div className="mt-4">
          <h3>결과:</h3>
          <p>{result.length > 0 ? result.join(", ") : "결과 없음"}</p>
        </div>
      </div>
    </div>
  );
};

export default BestAlbum;
