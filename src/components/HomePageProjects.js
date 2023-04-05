// React imports
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
// React Carousel Imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomePageProjects = () => {
  const projects = [
    {
      title: "Kiwiburn",
      subtitle: "Multipage Event Website built with React",
      url: "/kiwiburnproject",
      image:
        "https://kiwiburn.com/wp-content/uploads/2017/09/Rob-Tangent-Kiwiburn-2017-121-of-299-web.jpg",
    },
    {
      title: "Gig Fort",
      subtitle: "Mobile App Design - Gig finding app",
      url: "/gigfortproject",
      image:
        "https://images.unsplash.com/photo-1604177052603-c2b4cff228db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      title: "Wacky Weka",
      subtitle: "Multipage React Website for Plant Nursery",
      url: "/wackywekaproject",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/0A2A9595_Weka.jpg",
    },
    {
      title: "Wacky Weka",
      subtitle: "Multipage React Website for Plant Nursery",
      url: "/wackywekaproject",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/0A2A9595_Weka.jpg",
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
