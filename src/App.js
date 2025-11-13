import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderTop";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <section id="home" className="home">
              <div className="home-content">
                <h1>Jessa Coronado</h1>
                <h2>
                  Computer Science Student | Aspiring Web Developer & Data
                  Scientist
                </h2>
                <p>
                  Hi, I'm Jez, a passionate student currently pursuing Computer
                  Science. I'm exploring the world of web development and data
                  science, where I focus on building projects step by step to
                  sharpen my skills.
                </p>
                <a href="/about" className="cta-button">
                  Learn More About Me
                </a>
              </div>
            </section>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
