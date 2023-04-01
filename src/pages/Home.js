import Hero from "../components/Hero";
import HomePageSkills from "../components/HomePageSkills";
import HomePageProjects from "../components/HomePageProjects";
import ContactForm from "../components/ContactForm";
import ChatBox from "../components/ChatBox";
// import images
// import bgcurve from "../img/background-curve.svg";

const Home = () => {
  return (
    <>
      <Hero />
      <HomePageSkills />
      <HomePageProjects />
      <div id="background-curve-cont">
        <div className="bg-curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div id="contact-form-section">
        <h2>Contact Me!</h2>
        <ContactForm />
      </div>
      <ChatBox />
    </>
  );
};

export default Home;
