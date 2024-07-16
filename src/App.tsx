import "./i18n/config";
import GithubLink from "./components/sections/GithubLink";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main>
      <GithubLink />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
