import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Projects from "./components/projects/Projects";
import MeAndAI from "./pages/AI page/MeAndAi";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/me-&-ai" element={<MeAndAI />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
