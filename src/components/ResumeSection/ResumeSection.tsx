import MyPhoto from "../../assets/icons/me.png";

const ResumeSection = () => {
  return (
    <>
      <section className="resume-section" id="inicio">
        <div className="resume-details">
          <div>
            <h2 className="title">
              Guilher<span>me</span> Rissi<span>.</span>
            </h2>
            <p>
              &nbsp; Desenvolvedor em formação com 2 anos e meio de estudos
              autônomos em programação, com foco em toda a parte do
              desenvolvimento web e software. Buscando a minha primeira
              oportunidade como estagiário na área de desenvolvimento para
              aplicar todos os meus conhecimentos em prática e evoluir junto a
              uma equipe técnica. Ao longo da minha jornada, desenvolvi vários
              projetos pessoais utilizando tecnologias como C#, ASP.NET,
              Javascript, SCSS, CSS, HTML e banco de dados relacionais e não
              relacionais. Conquistei certificados reconhecidos por mérito em um
              teste presencial aplicado pela minha escola, que avaliava o
              conhecimento em JavaScript. Fui aprovado nos níveis 1, 2 e 3 — uma
              certificação concedida a poucas pessoas no estado do Paraná, o que
              reforça minha dedicação e domínio da linguagem. Tenho projetos
              pessoais no GitHub para desmonstrar a minha evolução contínua.
            </p>
          </div>
          <div className="resume-techs">
            <a href="" className="resume-cv-btn">
              <i
                className="bi bi-arrow-down-square theme-icon"
                title="Curriculo"
              ></i>
              <p>
              Download CV
              </p>
            </a>
            <i className="bi bi-github theme-icon" title="Github"></i>
            <i className="bi bi-linkedin theme-icon" title="Linkedin"></i>
          </div>
        </div>
        <div className="my-image">
          <img src={MyPhoto} alt="" />
        </div>
        <span className="background-resume"></span>
      </section>
    </>
  );
};

export default ResumeSection;
