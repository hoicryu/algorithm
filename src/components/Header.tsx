import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const routes = [
    { url: "/", title: "home" },
    { url: "/string", title: "String" },
    { url: "/dynamic", title: "Dynamic" },
    { url: "/dfs", title: "DFS" },
    { url: "/bfs", title: "BFS" },
    { url: "/hash", title: "Hash" },
  ];
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Algorithm Playground</h1>
        <nav>
          {routes.map((route) => (
            <Link
              to={route.url}
              className="mx-2 text-white hover:text-gray-300"
            >
              {route.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
