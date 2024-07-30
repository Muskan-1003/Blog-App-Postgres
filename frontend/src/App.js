import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound.jsx"

import CreateBlog from "./pages/CreateBlog"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />

        <Route path="/create" element={<CreateBlog />} />
        <Route path="*" element={< NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
