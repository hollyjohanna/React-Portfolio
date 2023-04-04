import { useEffect } from "react";
import htmlimg from "./../img/html.png";
import cssimg from "./../img/css.png";
import sassimg from "./../img/sass.png";
import jsimg from "./../img/js.png";
import reactimg from "./../img/react.png";
import nodeimg from "./../img/node.png";
import figmaimg from "./../img/figma.png";
import gitimg from "./../img/git.png";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

const LanguageSkills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="language-skills-section">
      <h2>Skills and Experience</h2>
      <div id="language-icon-container">
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={htmlimg} alt="HTML5 Logo" className="lang-logo"></img>
          </div>
          <p>HTML5</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={cssimg} alt="CSS3 Logo" className="lang-logo"></img>
          </div>
          <p>CSS3</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={sassimg} alt="Sass Logo" className="lang-logo"></img>
          </div>
          <p>SASS</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={jsimg} alt="JavaScript Logo" className="lang-logo"></img>
          </div>
          <p>JavaScript</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={reactimg} alt="React JS Logo" className="lang-logo"></img>
          </div>
          <p>React JS</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={nodeimg} alt="Node JS Logo" className="lang-logo"></img>
          </div>
          <p>Node JS</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={figmaimg} alt="Figma Logo" className="lang-logo"></img>
          </div>
          <p>Figma</p>
        </div>
        <div
          className="language-block"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="language-icon">
            <img src={gitimg} alt="Git Logo" className="lang-logo"></img>
          </div>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSkills;
