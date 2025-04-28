import MangaKitsu from "../../../../assets/imgs/sliderImgs/mangaKitsu.png";
import KitsuSearch from "../../../../assets/imgs/sliderImgs/kitsuSearch.png";
import HtmlImg from "../../../../assets/icons/techs/html5.svg";
import CssImg from "../../../../assets/icons/techs/css3.svg";
import JsImg from "../../../../assets/icons/techs/javascript.svg";
import ScssImg from "../../../../assets/icons/techs/sass.svg";
import KitsuImg from "../../../../assets/icons/techs/kitsu.png";

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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae odio nam aspernatur, voluptates ducimus adipisci,
                ipsa eum molestias sed tempore, sunt quia alias nulla eius
                porro! Incidunt distinctio earum laborum!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae odio nam aspernatur, voluptates ducimus adipisci,
                ipsa eum molestias sed tempore, sunt quia alias nulla eius
                porro! Incidunt distinctio earum laborum!
                
              </p>
            </article>
            <aside className="embla__link__social__medias">
              <div>
                <a
                  href="https://github.com/glrmrissi/mangasKitsu"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                  Code
                </a>
              </div>
              <div>
                <a
                  href="https://glrmrissi.github.io/mangasKitsu/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  On web
                </a>
              </div>
            </aside>
          </div>
          <img src={MangaKitsu} />
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">
              Sistema de busca usando a KitsuAPI
            </h1>
            <div>
              <a
                href="https://github.com/glrmrissi/KitsuAPIRestFulSearch"
                target="_blank"
              >
                <i className="bi bi-github theme-icon"></i>
                Code
              </a>
            </div>
            <div>
              <a
                href="https://github.com/glrmrissi/KitsuAPIRestFulSearch"
                target="_blank"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                On web
              </a>
            </div>
          </div>
          <img src={KitsuSearch} />
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">Minimal API com ASP.NET</h1>
            <div>
              <a href="https://github.com/glrmrissi/StudyAsp" target="_blank">
                <i className="bi bi-github theme-icon"></i>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">MangaKitsu</h1>
            <div>
              <a
                href="https://github.com/glrmrissi/mangasKitsu"
                target="_blank"
              >
                <i className="bi bi-github theme-icon"></i>
                Code
              </a>
            </div>
            <div>
              <a
                href="https://glrmrissi.github.io/mangasKitsu/"
                target="_blank"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                On web
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSlider;
