import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Algorithm Playground</h1>
        <nav>
          <Link to="/" className="mx-2 text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/string" className="mx-2 text-white hover:text-gray-300">
            String
          </Link>
          <Link to="/dynamic" className="mx-2 text-white hover:text-gray-300">
            Dynamic
          </Link>
          <Link to="/dfs" className="mx-2 text-white hover:text-gray-300">
            DFS
          </Link>
          <Link to="/bfs" className="mx-2 text-white hover:text-gray-300">
            BFS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
