import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-badag.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-badging.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-scale.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-scales.jpg" alt="" />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;