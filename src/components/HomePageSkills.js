import { WindowStack, Laptop, VectorPen, People } from "react-bootstrap-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageSkills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="skills-container">
      <div id="content-container">
        <h2>What I Can Do</h2>
        <div
          id="icon-container"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="service-card">
            <div id="icon">
              <WindowStack />
            </div>
            <h3>UX/UI Design</h3>
            <p>User experience research, analysis and application</p>
          </div>

          <div className="service-card">
            <div id="icon">
              <Laptop />
            </div>
            <h3>Web Development</h3>
            <p>HTML, CSS, Javascript, React experience</p>
          </div>

          <div className="service-card">
            <div id="icon">
              <VectorPen />
            </div>
            <h3>Illustration</h3>
            <p>Adobe Creative Suite and physcial illustration </p>
          </div>

          <div className="service-card">
            <div id="icon">
              <People />
            </div>
            <h3>Project Collaboration</h3>
            <p>Group projects, large scale collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSkills;
