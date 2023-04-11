import { useEffect, useState } from "react";
// Bootstrap imports
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Github,
  XCircle,
  BoxArrowUpRight,
} from "react-bootstrap-icons";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// image imports
import wetaverse from "./../img/wetaverse-main.png";
import sassimg from "./../img/sass.png";
import mongodbimg from "./../img/mongodb.png";
import bootstrapimg from "./../img/bootstrap.png";
import jsimg from "./../img/js.png";
import nodeimg from "./../img/node.png";
import figmaimg from "./../img/figma.png";

import wetaversehifi1 from "./../img/wetaverse-hifi1.png";
import wetaversehifi2 from "./../img/wetaverse-hifi2.png";
import wetaversehifi3 from "./../img/wetaverse-hifi3.png";
import wetaversehifi4 from "./../img/wetaverse-hifi4.png";
import wetaversehifi5 from "./../img/wetaverse-hifi5.png";
import wetaversehifi6 from "./../img/wetaverse-hifi6.png";
import wetaversehifi7 from "./../img/wetaverse-hifi7.png";
import wetaversehifi8 from "./../img/wetaverse-hifi8.png";
import wetaversehifi9 from "./../img/wetaverse-hifi9.png";
import wetaversehifi10 from "./../img/wetaverse-hifi10.png";
import wetaversehifi11 from "./../img/wetaverse-hifi11.png";

const Wetaverse = () => {
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
        <h2>Wetaverse</h2>
        <h3>Collaborative Social Media Website</h3>
        <img
          src={wetaverse}
          alt="Wetaverse Main Banner"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></img>
      </div>
      <div className="project-content-container">
        <p>
          Wetaverse is a social media full-stack application created
          collaboratively by a team of three people as the third project for my
          Diploma in Web/UX Design and Development. We were tasked with creating
          a social media-style application for ZIP (Zero Invasive Predators)
          that engages the public and spreads awareness of the conservation
          efforts of the client. The project required us to create an interface
          that enabled users to post (and reply to) content, edit and delete
          posts and generally interact with other users on the application. For
          this, we came up with the idea of Wetaverse, an image-sharing platform
          that allows users to create image posts of local flora and fauna as
          well as comment on and interact with other users' posts.
        </p>
        <p>
          As a team, we created a proposal and collaboratively created initial
          designs from inspiration gathered from competitors and similar sites.
          We came up with a mood board to help guide the design phase and
          created a style tile to work from so that all the designs were
          cohesive and harmonious. We then created lo-fi prototypes in Figma and
          brought these together to create our hi-fi prototypes which we
          user-tested and altered before moving into the development of the
          project.
        </p>
        <p className="bottom-text">
          Each team member had daily tasks to complete for the project, the
          workflow was managed using Trello which helped us track our progress
          and adjust our workflow as needed. The application was built using
          HTML, Sass, Javascript and Jquery for calling the API. MongoDB was
          used to store the data of the user's posts as well as the user login
          information which we encrypted for security purposes.
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
              setModalImgSrc(wetaversehifi11);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi11}
              alt="wetaverse hifi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi1);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi1}
              alt="Wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi2);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi2}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi3);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi3}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi4);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi4}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi5);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi5}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi6);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi6}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi7);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi7}
              alt="wetaverse Hi-Fi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi8);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi8}
              alt="wetaverse Hifi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi9);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi9}
              alt="wetaverse Hifi"
            ></img>
          </div>
          <div
            onClick={() => {
              setShowModal(true);
              setModalImgSrc(wetaversehifi10);
            }}
          >
            <img
              className="carousel-img"
              src={wetaversehifi10}
              alt="wetaverse hifi"
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
          <a
            href="https://www.javascript.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="tools" src={jsimg} alt="javascript icon"></img>
          </a>
          <a href="https://sass-lang.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={sassimg} alt="sass icon"></img>
          </a>
          <a href="https://www.mongodb.com/" rel="noreferrer" target="_blank">
            <img className="tools" src={mongodbimg} alt="Mongodb icon"></img>
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
          href="https://github.com/hollyjohanna/app-development-summative"
          target="_blank"
          rel="noreferrer"
        >
          <Github></Github>
        </a>
        <a
          href="https://summative3-frontend.vercel.app/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <BoxArrowUpRight></BoxArrowUpRight>
        </a>
      </div>
    </div>
  );
};

export default Wetaverse;
