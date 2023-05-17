import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
