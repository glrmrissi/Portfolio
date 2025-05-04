import MangaKitsu from "../../../../assets/imgs/sliderImgs/mangaKitsu.png";
import KitsuSearch from "../../../../assets/imgs/sliderImgs/kitsuSearch.png";
import Forca from "../../../../assets/imgs/sliderImgs/forca.png";
import HtmlImg from "../../../../assets/icons/techs/html5.svg";
import CssImg from "../../../../assets/icons/techs/css3.svg";
import JsImg from "../../../../assets/icons/techs/javascript.svg";
import ScssImg from "../../../../assets/icons/techs/sass.svg";
import KitsuImg from "../../../../assets/icons/techs/kitsu.png";
import CSharpImg from "../../../../assets/icons/techs/csharp.svg";
import DotNetImg from "../../../../assets/icons/techs/dotnet.svg";

const ContentSlider = () => {
  return (
    <>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">MangaKitsu</h1>
            <aside className="embla__overlay__techs">
              <img src={HtmlImg} alt="HTML" title="HTML" />
              <img src={CssImg} alt="CSS" title="CSS" />
              <img src={JsImg} alt="Javascript" title="Javascript" />
              <img src={ScssImg} alt="Scss/Sass" title="Scss/Sass" />
              <img src={KitsuImg} alt="KitsuAPI" title="KitsuAPI" />
            </aside>
            <article className="embla__resume__project">
              <p>
                Este projeto está consumindo a <strong>KitsuAPI</strong> e está
                sendo feito toda a parte de "streaming". Categorias, trending,
                searchfilter e paginação. O projeto está atualmente está
                pausado.
              </p>
            </article>
            <aside className="embla__link__social__medias">
                <a
                  href="https://github.com/glrmrissi/mangasKitsu"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                  Código
                </a>
                <a
                  href="https://glrmrissi.github.io/mangasKitsu/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Página
                </a>
            </aside>
          </div>
          <img src={MangaKitsu} />
        </div>
      </div>

      {/* Division 1*/}

      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">
              Sistema de busca com KitsuAPI
            </h1>
            <aside className="embla__overlay__techs">
              <img src={HtmlImg} alt="HTML" title="HTML" />
              <img src={CssImg} alt="CSS" title="CSS" />
              <img src={JsImg} alt="Javascript" title="Javascript" />
              <img src={ScssImg} alt="Scss/Sass" title="Scss/Sass" />
              <img src={KitsuImg} alt="KitsuAPI" title="KitsuAPI" />
            </aside>
            <article className="embla__resume__project">
              <p>
                Este projeto também está consumindo a <strong>KitsuAPI</strong>,
                ele foi o meu primeiro projeto consumindo uma api de terceiros.
                Fiz a parte do seachfilter apenas, este é um projeto mais
                simples que o anterior.
              </p>
            </article>
            <aside className="embla__link__social__medias">
                <a
                  href="https://github.com/glrmrissi/KitsuAPIRestFulSearch"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                  Código
                </a>
                <a
                  href="https://glrmrissi.github.io/KitsuAPIRestFulSearch/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Página
                </a>
              
            </aside>
          </div>
          <img src={KitsuSearch} />
        </div>
      </div>

      {/* Division 2*/}

      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">Jogo da forca</h1>
            <aside className="embla__overlay__techs">
              <img src={HtmlImg} alt="HTML" title="HTML" />
              <img src={CssImg} alt="CSS" title="CSS" />
              <img src={JsImg} alt="Javascript" title="Javascript" />
            </aside>
            <article className="embla__resume__project">
              <p>
                Este projeto foi feito enquanto estava no ensino médio, feito
                para uma professora de Saúde e bem-estar. A arte é feita com pixel
                art, no caso eu fiz a forca e tentei deixar tudo no mesmo
                estilo. Esse projeto me ajudou a entender muito a lógica do
                Javascript em geral.
              </p>
            </article>
            <aside className="embla__link__social__medias">
                <a
                  href="https://github.com/glrmrissi/JogoDaForca"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                  Código
                </a>
                <a
                  href="https://glrmrissi.github.io/JogoDaForca/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Página
                </a>
            </aside>
          </div>
          <img src={Forca} />
        </div>
      </div>

      {/* Division 3*/}

      <div className="embla__slide">
        <div className="embla__slide__number" id="backend">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">
              Minimal API usando ASP.NET
            </h1>
            <aside className="embla__overlay__techs">
              <img src={CSharpImg} alt="C#" title="C#" />
              <img src={DotNetImg} alt=".Net" title=".NET" />
            </aside>
            <article className="embla__resume__project">
              <p>
                Este projeto é uma MinimalAPI, ASP.NET CORE. Feita toda a parte
                de RestFul e conectado com o banco de dados relacional
                PostgreSQL. Foi neste projeto que eu me apaixonei pelo ASP.NET.
              </p>
            </article>
            <aside className="embla__link__social__medias">
                <a href="https://github.com/glrmrissi/StudyAsp" target="_blank">
                  <i className="bi bi-github"></i>
                  Código
                </a>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSlider;
