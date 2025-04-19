import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/scss/import.css"
import Header from "./components/Header/Header";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Skills from "./components/Skills/Skills";
import TopBtn from "./components/TopBtn/TopBtn";

function App() {
  return (
    <>
      <Header></Header>

      <ResumeSection></ResumeSection>
      
      <Skills></Skills>
      <TopBtn></TopBtn>
    </>
  );
}

export default App;
