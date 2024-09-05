import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import StringIndex from "pages/String";
import DynamicIndex from "pages/Dynamic";
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
      </Routes>
    </Router>
  );
};

export default App;
