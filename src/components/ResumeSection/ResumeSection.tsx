import MyPhoto from "../../assets/icons/me.png";
import Rectangle from "../../assets/icons/rectangle.png";

const ResumeSection = () => {
  return (
    <>
      <section className="resume-section">
        <div className="resume-details">
          <div>
            <h2 className="title">
              Guilher
              <span>me</span>
            </h2>
            <h2 className="title">Rissi<span>.</span></h2>
            <p>
              Olá, meu nome é Guilherme Rissi, atualmente estou estudando e
              aplicando em prática .NET, ASP.NET e React usando TypeScript.
            </p>
          </div>
        </div>
        <div className="my-image">
          <img src={MyPhoto} alt=""/>
        </div>
        <span className="background-resume">
            <img src={Rectangle} alt="" />
        </span>
      </section>
    </>
  );
};

export default ResumeSection;
