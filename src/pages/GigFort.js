import { useEffect, useState } from "react";
// Bootstrap imports
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  XCircle,
} from "react-bootstrap-icons";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// image imports
import gigfortmain from "./../img/gigfort-main.png";
import mappin from "./../img/Map-Pin.png";
import gigfortmoodstyle from "./../img/gigfort-mood-style.png";
import gigforthifi1 from "./../img/gigfort-hifi-1.png";
import gigforthifi2 from "./../img/gigfort-hifi-2.png";
import gigforthifi3 from "./../img/gigfort-hifi-3.png";
import gigforthifi4 from "./../img/gigfort-hifi-4.png";
import gigforthifi5 from "./../img/gigfort-hifi-5.png";
import gigfortlofi1 from "./../img/gigfort-lofi-1.png";
import gigfortlofi2 from "./../img/gigfort-lofi-2.png";
import gigfortlofi3 from "./../img/gigfort-lofi-3.png";

const GigFort = () => {
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
        <h2>Gig Fort</h2>
        <h3>Application Design</h3>
        <img
          src={gigfortmain}
          alt="Gig Fort Main Banner"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></img>
      </div>
      <div className="project-content-container">
        <p className="bottom-text">
          Gig Fort is an event-finding app specific to the Wellington region
          that helps users quickly and easily find events and gigs that are on
          using a map interface without the fuss of sifting through pages of
          excess information. I was tasked with performing the UX process and
          designing the UI of this app. This process included running surveys,
          collecting information from users, conducting competitor analyses and
          then creating wireframes and prototypes to test viability. I designed
          and created prototypes of this app using Figma.
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
