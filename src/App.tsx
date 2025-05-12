import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/scss/import.css"
import Header from "./components/Header/Header";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Skills from "./components/Skills/Skills";
import TopBtn from "./components/TopBtn/TopBtn";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <>
      <Header></Header>

      <ResumeSection></ResumeSection>
      
      <Skills></Skills>

      <Projects></Projects>

      <Contact></Contact>
      
      <Footer></Footer>
      
      <TopBtn></TopBtn>
    </>
  );
}

export default App;
