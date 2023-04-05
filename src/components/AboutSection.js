import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import holliday from "./../img/holliday.png";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about-section">
      <div id="about-content-container">
        <h2>About Me</h2>
        <img
          src={holliday}
          alt="Face shot of me!"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        ></img>
        <div
          id="about-text-container"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p>
            I’ve been a web developer and UX designer since the beginning of
            2022 when I started my diploma in Web/UX design and since then have
            become obsessed with coding awesome fun sites that are fully
            designed by me!
          </p>
          <p>
            I have since become a skilled designer and a passionate developer,
            creating fun little websites in my spare time and continuing to
            learn and extend my knowledge.
          </p>
          <p>
            Before Web and UX design I spent most of my time creating art, I
            love painting, drawing, crafting and creating and I have always been
            a very logical and precise artist so Web Development fits me well!
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_heyjohanna_/"
          >
            <button>See Some Art</button>
          </a>
          <Link to="#skills-container">
            <button>See Some Development</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
