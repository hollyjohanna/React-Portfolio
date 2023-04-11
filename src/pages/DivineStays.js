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

import divinemoodstyle from "./../img/divine-mood-style.png";
import divinehifi1 from "./../img/divine-hifi1.png";
import divinehifi2 from "./../img/divine-hifi2.png";
import divinehifi3 from "./../img/divine-hifi-3.png";
import divinehifi4 from "./../img/divine-hifi4.png";
import divinehifi5 from "./../img/divine-hifi5.png";
import divinehifi6 from "./../img/divine-hifi-6.png";
import divinehifi7 from "./../img/divine-hifi7.png";
import divinelofi1 from "./../img/divine-lofi1.png";
import divinelofi2 from "./../img/divine-lofi2.png";
import divinelofi3 from "./../img/divine-lofi3.png";
import divinelofi4 from "./../img/divine-lofi4.png";

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
      <div className="project-hero-container">
        <h2>Divine Stays</h2>
        <h3>Accommodation Booking Website (Single Page)</h3>
        <img
          src={divinestays}
          alt="Divine Stays Main Banner"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></img>
      </div>
      <div className="project-content-container">
        <p>
          Divine Stays is an accommodation booking website created as the second
          project for my Diploma in Web/UX Design and Development. I was given
          the task to design and develop a single-page website that would allow
          users to input holiday information (number of guests, number of
          nights) and display accommodation options based on the information
          given by the user. The app was to have a specific niche, for this
          project t I decided to create a website for vineyard-specific
          accommodation listings.
        </p>
        <p>
          The project consisted of a research phase, a design phase and a
          development phase. I conducted several UX research processes including
          competitor analyses, SWOT analyses, user interviews and user flows.
          During the design phase, I created preliminary design concepts to
          inform the design of the final product including a mood board, a style
          tile, wireframes, low-fidelity prototypes and high-fidelity
          prototypes. As a final stage in the design phase, the hi-fi prototypes
          were user tested and adjusted based on feedback received from this
          process before the development process began.
        </p>
        <p className="bottom-text">
          The development of this project was achieved by using HTML, Sass and
          vanilla Javascript. I used Swiper.js to keep the project as a
          single-page application that was able to appear as multiple pages. I
          also implemented the use of Mapbox to add a map feature to the final
          slide to show users where their accommodation options were on a map.
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
              setModalImgSrc(divinehifi1);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi1}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi2);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi2}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi3);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi3}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi4);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi4}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi5);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi5}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi6);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi6}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinehifi7);
            }}
          >
            <img
              className="carousel-img"
              src={divinehifi7}
              alt="Divine Stays Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinelofi1);
            }}
          >
            <img
              className="carousel-img"
              src={divinelofi1}
              alt="Divine Stays Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinelofi2);
            }}
          >
            <img
              className="carousel-img"
              src={divinelofi2}
              alt="Divine Stays Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinelofi3);
            }}
          >
            <img
              className="carousel-img"
              src={divinelofi3}
              alt="Divine Stays Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinelofi4);
            }}
          >
            <img
              className="carousel-img"
              src={divinelofi4}
              alt="Divine Stays Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(divinemoodstyle);
            }}
          >
            <img
              className="carousel-img"
              src={divinemoodstyle}
              alt="Divine Stays Moodboard"
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
