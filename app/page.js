import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Headers from './components/Header';
import Skills from './components/Skills';
import Project from './components/Project';
import Certification from './components/Certification';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Headers />
    <About />
    <Experience />
    <Education />
    <Skills />
    <Project />
    <Certification />
    <hr />
    <Footer />
    </>
  );
}
