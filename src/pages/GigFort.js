import { useEffect } from "react";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// image imports
import gigfortmain from "./../img/gigfort-main.png";
import gigfort1 from "./../img/gig-fort1.png";
import gigfortlofi1 from "./../img/gigfort-lofi-1.png";
import gigfortlofi2 from "./../img/gigfort-lofi-2.png";
import gigfortstyletile from "./../img/gigfort-styletile.png";
import gigfortmoodboard from "./../img/gigfort-moodBoard.png";
import gigforthifi1 from "./../img/gigfort-hifi1.png";
import gigforthifi2 from "./../img/gigfort-hifi2.png";
import gigforthifi3 from "./../img/gigfort-hifi3.png";
import mappin from "./../img/Map-Pin.png";

const GigFort = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
    },
    tabletLarge: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="spec-project-container">
      <div
        className="project-hero-container"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2>Gig Fort</h2>
        <h3>Application Design</h3>
        <img src={gigfortmain} alt="Gig Fort Main Banner"></img>
      </div>
      <div className="project-content-container">
        <p>
          Gig Fort is an event finding app specific to the Wellington region
          that helps users quickly and easily find events and gigs that are on
          using a map interface without the fuss of sifting through pages of
          excess information. I was tasked with performing the UX process and
          designing the UI of this app. This process included running surveys,
          collecting information from users, conducting competitor analyses and
          then creating wire-frames and prototypes to test viability. I designed
          and created prototypes of this app using Figma.
        </p>
        <div id="carousel-fade"></div>
        <Carousel
          className="gigfort-slider"
          responsive={responsive}
          swipeable={true}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item-padding"
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          <div>
            <img src={gigfort1} alt="Gig Fort main page"></img>
          </div>
          <div>
            <img src={gigforthifi3} alt="Gig Fort liked events page"></img>
          </div>
          <div>
            <img
              src={gigforthifi2}
              alt="Gig Fort liked events page on an angle"
            ></img>
          </div>
          <div>
            <img src={gigforthifi1} alt="Gig Fort list view"></img>
          </div>
          <div>
            <img src={gigfortlofi1} alt="Gig Fort Lo fi list view"></img>
          </div>
          <div>
            <img src={gigfortlofi2} alt="Gig Fort Lo fi first pass"></img>
          </div>
          <div>
            <img src={gigfortstyletile} alt="Gig Fort Style tile"></img>
          </div>
          <div>
            <img src={gigfortmoodboard} alt="Gig Fort Moodboard"></img>
          </div>
        </Carousel>
      </div>
      <div className="project-linkbtn">
        <a
          href="https://play.google.com/store/apps/details?id=com.gigfort&pli=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mappin} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default GigFort;
