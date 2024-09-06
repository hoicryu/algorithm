import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import StringIndex from "pages/String";
import DynamicIndex from "pages/Dynamic";
import DFSIndex from "pages/DFS";
import BFSIndex from "pages/BFS";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/string"
          element={
            <Layout>
              <StringIndex />
            </Layout>
          }
        />
        <Route
          path="/dynamic"
          element={
            <Layout>
              <DynamicIndex />
            </Layout>
          }
        />
        <Route
          path="/dfs"
          element={
            <Layout>
              <DFSIndex />
            </Layout>
          }
        />
        <Route
          path="/bfs"
          element={
            <Layout>
              <BFSIndex />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
