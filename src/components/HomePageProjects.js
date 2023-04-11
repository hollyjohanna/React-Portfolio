// React imports
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// image imports
import gigfort1 from "./../img/gig-fort1.png";
import divinestays from "./../img/divine-stays.png";
import wackyweka from "./../img/wacky-weka.png";
import wetaverse from "./../img/wetaverse-main.png";

const HomePageProjects = () => {
  const projects = [
    {
      title: "Gig Fort",
      subtitle: "Mobile App Design - Gig finding app",
      url: "/gigfortproject",
      image: gigfort1,
    },
    {
      title: "Wacky Weka",
      subtitle: "Multipage React Website for Plant Nursery",
      url: "/wackywekaproject",
      image: wackyweka,
    },
    {
      title: "Divine Stays",
      subtitle: "Single Page Accommodation Booking Site",
      url: "/divinestaysproject",
      image: divinestays,
    },
    {
      title: "Wetaverse",
      subtitle: "Social Media Full Stack Application - Collaborative Project",
      url: "/wetaverseproject",
      image: wetaverse,
    },
  ];

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
    <div id="hm-pg-projects-container">
      <div
        id="projects-container"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2>Recent Projects</h2>
        <div id="carousel-fade"></div>
        <Carousel
          className="projects-slider"
          responsive={responsive}
          swipeable={true}
          infinite={true}
          partialVisible={false}
          itemClass="carousel-item-padding"
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2 className="project-card-title">{project.title}</h2>
              <img
                className="featured-img"
                src={project.image}
                alt={project.title}
              />
              <h3 className="project-card-subtitle">{project.subtitle}</h3>
              <Link to={project.url}>
                <button>See Project</button>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePageProjects;
// //
// ===============================================================================================================
//
