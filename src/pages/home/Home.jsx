import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";
import Social from "../../components/social/Social";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Social />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
