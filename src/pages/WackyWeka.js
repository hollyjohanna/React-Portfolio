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
import wackywekamain from "./../img/wacky-weka.png";
import sassimg from "./../img/sass.png";
import wordpressimg from "./../img/wordpress.png";
import bootstrapimg from "./../img/bootstrap.png";
import reactimg from "./../img/react.png";
import nodeimg from "./../img/node.png";
import figmaimg from "./../img/figma.png";

import wackywekamoodstyle from "./../img/wackyweka-mood-style.png";
import wackywekahifi1 from "./../img/wackyweka-hifi1.png";
import wackywekahifi2 from "./../img/wackyweka-hifi2.png";
import wackywekahifi3 from "./../img/wackyweka-hifi3.png";
import wackywekahifi4 from "./../img/wackyweka-hifi4.png";
import wackywekahifi5 from "./../img/wackyweka-hifi5.png";
import wackywekahifi6 from "./../img/wackyweka-hifi6.png";
import wackywekahifi7 from "./../img/wackyweka-hifi7.png";
import wackywekahifi8 from "./../img/wackyweka-hifi8.png";
import wackywekahifi9 from "./../img/wackyweka-hifi9.png";
import wackywekahifi10 from "./../img/wackyweka-hifi10.png";
import wackywekahifi11 from "./../img/wackyweka-hifi11.png";
import wackywekahifi12 from "./../img/wackyweka-hifi12.png";
import wackywekahifi13 from "./../img/wackyweka-hifi13.png";
import wackywekalofi1 from "./../img/wackyweka-lofi1.png";
import wackywekalofi2 from "./../img/wackyweka-lofi2.png";
import wackywekalofi3 from "./../img/wackyweka-lofi3.png";

const WackyWeka = () => {
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
        <h2>Wacky Weka Nurseries</h2>
        <h3>Multipage React Website</h3>
        <img
          src={wackywekamain}
          alt="Wacky Weka Main Banner"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></img>
      </div>
      <div className="project-content-container">
        <p>
          Wacky Weka is a plant nursery business and information website that
          was created as the final project for my Diploma in Web/UX Design and
          Development. I was tasked with creating a website for a business that
          needed a digital platform to advertise their business and give
          information about their work. The project required a fully
          custom-designed site with the capability for the client to add, edit
          and delete information across the website easily.
        </p>
        <p>
          The process for this project included going through all the stages of
          ideation, Design and development. I began by assessing the needs of
          the project and the requirements of the business and then created a
          sitemap to map out how the website would flow and how the content
          would be organised. Several iterations of the sitemap were created to
          find the optimal layout with content structured in a logical way. A
          competitor analysis was conducted and design inspiration was gathered
          and then the preliminary designs were created. This included a mood
          board, style tile, wireframes, and lo-fi and hi-fi prototypes. These
          prototypes were user tested and the designs were altered based on user
          and client feedback.
        </p>
        <p className="bottom-text">
          Finally, for the development of this project, I created a React
          front-end for the fast reload times and ability to fully customise the
          code, I used Sass for easier more streamlined styling and linked the
          app to a WordPress backend. This provided the client with the option
          to log in to their WordPress Website and add, edit and delete content
          without the need to contact the developer. This also allowed me to use
          several WordPress plugins for the optimisation of the website.
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
              setModalImgSrc(wackywekahifi1);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi1}
              alt="wacky weka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi2);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi2}
              alt="wacky weka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi3);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi3}
              alt="Wacky Weka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi4);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi4}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi5);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi5}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi6);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi6}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi7);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi7}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi8);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi8}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi9);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi9}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi10);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi10}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi11);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi11}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi12);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi12}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekahifi13);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekahifi13}
              alt="wackyweka Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekalofi1);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekalofi1}
              alt="wackyweka Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekalofi2);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekalofi2}
              alt="wackyweka Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekalofi3);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekalofi3}
              alt="wackyweka Lo-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wackywekamoodstyle);
            }}
          >
            <img
              className="carousel-img"
              src={wackywekamoodstyle}
              alt="Wacky Weka Moodboard"
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
          <a href="https://react.dev/" rel="noreferrer" target="_blank">
            <img className="tools" src={reactimg} alt="react icon"></img>
          </a>
          <a href="https://wordpress.com/" rel="noreferrer" target="_blank">
            <img
              className="tools"
              src={wordpressimg}
              alt="wordpress icon"
            ></img>
          </a>
          <a href="https://sass-lang.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={sassimg} alt="sass icon"></img>
          </a>
          <a href="https://nodejs.org/en" rel="noreferrer" target="_blank">
            <img className="tools" src={nodeimg} alt="node icon"></img>
          </a>
          <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
            <img
              className="tools"
              src={bootstrapimg}
              alt="bootstrap icon"
            ></img>
          </a>
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={figmaimg} alt="figma icon"></img>
          </a>
        </div>
      </div>
      <div className="project-linkbtn">
        <a
          href="https://github.com/hollyjohanna/Wacky-Weka"
          target="_blank"
          rel="noreferrer"
        >
          <Github></Github>
        </a>
      </div>
    </div>
  );
};

export default WackyWeka;
