import "./assets/scss/import.css"
import Header from "./components/Header/Header";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header></Header>

      <ResumeSection></ResumeSection>
      
      <Skills></Skills>
    </>
  );
}

export default App;
