import MangaKitsu from "../../../../assets/imgs/sliderImgs/mangaKitsu.png";
import KitsuSearch from "../../../../assets/imgs/sliderImgs/kitsuSearch.png";

const ContentSlider = () => {
  return (
    <>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <div className="embla__overlay__directs">
            <h1 className="embla__overlay__title">MangaKitsu</h1>
            <div>
              <a href="https://github.com/glrmrissi/mangasKitsu" target="_blank">
                <i className="bi bi-github theme-icon"></i>
                Code
              </a>
            </div>
            <div>
              <a href="https://glrmrissi.github.io/mangasKitsu/" target="_blank">
                <i className="bi bi-box-arrow-up-right"></i>
                On web
              </a>
            </div>
          </div>
          <img src={MangaKitsu} />
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <h1 className="embla__overlay__title">
            Sistema de busca usando a Kitsu API
          </h1>
          <img src={KitsuSearch} />
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <h1>JS</h1>
        </div>
      </div>
      <div className="embla__slide">
        <div className="embla__slide__number">
          <h1>TS</h1>
        </div>
      </div>
    </>
  );
};

export default ContentSlider;
