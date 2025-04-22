import htmlImg from "../../assets/icons/techs/html5.svg";
import cssImg from "../../assets/icons/techs/css3.svg";
import jsImg from "../../assets/icons/techs/javascript.svg";
import nodejsImg from "../../assets/icons/techs/nodejs.svg";
import bootstrapImg from "../../assets/icons/techs/bootstrap.svg";
import sassImg from "../../assets/icons/techs/sass.svg";
import gitImg from "../../assets/icons/techs/git.svg";
import csharpImg from "../../assets/icons/techs/csharp.svg";
import dotnetImg from "../../assets/icons/techs/dotnet.svg";
import tsImg from "../../assets/icons/techs/ts.svg";
import reactImg from "../../assets/icons/techs/react.svg";
const Skills = () => {
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={htmlImg} title="HTML5" />
            <div className="skills-data">
              <h3>2022</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>HTML5</h1>
            <p>Meow Meow</p>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={cssImg} title="CSS3" />
            <div className="skills-data">
              <h3>2022</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>CSS3</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={jsImg} title="Javascript" />
            <div className="skills-data">
              <h3>2023</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>Javascript</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={nodejsImg} title="NodeJs" />
            <div className="skills-data">
              <h3>2023</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>NodeJS</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={bootstrapImg} title="Bootstrap" />
            <div className="skills-data">
              <h3>2023</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>Bootstrap</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={sassImg} title="Sass/Scss" />
            <div className="skills-data">
              <h3>2024</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>SCSS/SASS</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={gitImg} title="Git" />
            <div className="skills-data">
              <h3>2024</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>Git</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={csharpImg} title="C#" />
            <div className="skills-data">
              <h3>2025</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>C#</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={dotnetImg} title="Dotnet" />
            <div className="skills-data">
              <h3>2025</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>.NET</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={reactImg} title="React" />
            <div className="skills-data">
              <h3>2025</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>React</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          <div className="skills-techs-imgs">
            <img src={tsImg} title="Typescript" />
            <div className="skills-data">
              <h3>2025</h3>
            </div>
          </div>
          <div className="skills-overlay">
            <h1>Typescript</h1>
          </div>
        </div>
        <div className="skills-grid" tabIndex={0}>
          Keep learning...
        </div>
      </section>
    </>
  );
};

export default Skills;
