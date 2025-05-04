import EmblaCarousel  from "./Slider/Slider";
import { EmblaOptionsType } from 'embla-carousel'

const Projects = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <section className="projects-section" id="projetos">
      <h1 className="skills-title">Projetos</h1>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </>
  );
};

export default Projects;
