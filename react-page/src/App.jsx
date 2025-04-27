import "./style.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="row">
        <div className="side">
          <AboutMe />
        </div>
        <div className="main">
          <Projects />
          <Experience />
        </div>
      </div>
      <Footer />
    </>
  );
}