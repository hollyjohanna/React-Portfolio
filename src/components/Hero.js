import heroimg from "./../img/heroimg.png";
import Sparkle from "react-sparkle";

const Hero = () => {
  return (
    <div id="hero">
      <Sparkle
        color={"#d67992"}
        count={20}
        minSize={5}
        maxSize={7}
        fadeOutSpeed={10}
        newSparkleOnFadeOut={true}
        flicker={true}
        flickerSpeed={"slower"}
      />
      <div id="hero-text-container">
        <h1>Hello,</h1>
        <div id="h2-container">
          <h2>I'm</h2>
          <h2 id="holliday">Holliday</h2>
        </div>
        <p id="desktop-tagline">Lets make a beautiful website together</p>
      </div>
      <img
        id="hero-img"
        src={heroimg}
        alt="Holliday in a yellow striped jumper"
      ></img>
      <p id="mobile-tagline">Lets make a beautiful website together</p>
    </div>
  );
};

export default Hero;
