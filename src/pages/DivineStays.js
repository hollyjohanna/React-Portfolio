import { useEffect, useState } from "react";
// Bootstrap imports
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Github,
  XCircle,
} from "react-bootstrap-icons";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// image imports
import divinestays from "./../img/divine-stays.png";
import sassimg from "./../img/sass.png";
import swiperimg from "./../img/swiper.png";
import bootstrapimg from "./../img/bootstrap.png";
import jqueryimg from "./../img/jquery.png";
import mapboximg from "./../img/mapbox.png";
import figmaimg from "./../img/figma.png";

import gigfortmoodstyle from "./../img/gigfort-mood-style.png";
import gigforthifi1 from "./../img/gigfort-hifi-1.png";
import gigforthifi2 from "./../img/gigfort-hifi-2.png";
import gigforthifi3 from "./../img/gigfort-hifi-3.png";
import gigforthifi4 from "./../img/gigfort-hifi-4.png";
import gigforthifi5 from "./../img/gigfort-hifi-5.png";
import gigfortlofi1 from "./../img/gigfort-lofi-1.png";
import gigfortlofi2 from "./../img/gigfort-lofi-2.png";
import gigfortlofi3 from "./../img/gigfort-lofi-3.png";

const DivineStays = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
    },
    tabletLarge: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <button id="left-arrow" onClick={onClick}>
      <ArrowLeftCircle />
    </button>
  );
  const CustomRightArrow = ({ onClick }) => (
    <button id="right-arrow" onClick={onClick}>
      <ArrowRightCircle />
    </button>
  );

  return (
    <div className="spec-project-container">
      <div
        className="project-hero-container"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2>Divine Stays</h2>
        <h3>Accommodation Booking Website (Single Page)</h3>
        <img src={divinestays} alt="Divine Stays Main Banner"></img>
      </div>
      <div className="project-content-container">
        <p>
          Divine Stays is an accommodation booking website created as the second
          project for my Diploma in Web/UX Design and Development. I was given
          the task to design and develop a single page website that would allow
          users to input holiday information (number of guests, numbers of
          nights) and display accommodation options based on the information
          given by the user.
        </p>
        <p>
          The project consisted of a research phase, design phase and a
          development phase. I conducted several UX research processes including
          competitor analyses, SWOT analyses, user interviews and user flows.
          During the design phase I created preliminary design concepts to
          inform the design of the final product including a mood-board, a style
          tile, wireframes, low fidelity prototypes and high fidelity
          prototypes. As a final stage in the design phase the hi-fi prototypes
          were user tested and adjusted based off of feedback recieved from this
          process before the development process began.
        </p>
        <Carousel
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          className="slider"
          responsive={responsive}
          swipeable={true}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item-padding"
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigforthifi5);
            }}
          >
            <img
              className="carousel-img"
              src={gigforthifi5}
              alt="Gig Fort Mobile"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigforthifi1);
            }}
          >
            <img
              className="carousel-img"
              src={gigforthifi1}
              alt="Gig Fort Mobile"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigforthifi2);
            }}
          >
            <img
              className="carousel-img"
              src={gigforthifi2}
              alt="Gig Fort Mobile"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigforthifi3);
            }}
          >
            <img
              className="carousel-img"
              src={gigforthifi3}
              alt="Gig Fort Mobile"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigforthifi4);
            }}
          >
            <img
              className="carousel-img"
              src={gigforthifi4}
              alt="Gig Fort Mobile"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigfortlofi1);
            }}
          >
            <img
              className="carousel-img"
              src={gigfortlofi1}
              alt="Gig Fort Lo fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigfortlofi2);
            }}
          >
            <img
              className="carousel-img"
              src={gigfortlofi2}
              alt="Gig Fort Lo fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigfortlofi3);
            }}
          >
            <img
              className="carousel-img"
              src={gigfortlofi3}
              alt="Gig Fort Lo fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(gigfortmoodstyle);
            }}
          >
            <img
              className="carousel-img"
              src={gigfortmoodstyle}
              alt="Gig Fort Moodboard"
            ></img>
          </div>
        </Carousel>
        {showModal && (
          <div className="modal" onClick={() => setShowModal(false)}>
            <XCircle id="exit" onClick={() => setShowModal(false)}></XCircle>
            <img
              className="modal-img"
              src={modalImgSrc}
              alt="Gig Fort Modal"
            ></img>
          </div>
        )}
      </div>
      <div className="project-tools">
        <h3>Tools Used</h3>
        <div id="tools-container">
          <a href="https://sass-lang.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={sassimg} alt="sass icon"></img>
          </a>
          <a href="https://swiperjs.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={swiperimg} alt="swiper icon"></img>
          </a>
          <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
            <img
              className="tools"
              src={bootstrapimg}
              alt="bootstrap icon"
            ></img>
          </a>
          <a href="https://jquery.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={jqueryimg} alt="jquery icon"></img>
          </a>
          <a href="https://www.mapbox.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={mapboximg} alt="mapbox icon"></img>
          </a>
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={figmaimg} alt="figma icon"></img>
          </a>
        </div>
      </div>
      <div className="project-linkbtn">
        <a
          href="https://github.com/hollyjohanna/divine-stays"
          target="_blank"
          rel="noreferrer"
        >
          <Github></Github>
        </a>
      </div>
    </div>
  );
};

export default DivineStays;
