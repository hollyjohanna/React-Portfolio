import React, { useState, useEffect } from "react";
import { InfoCircle } from "react-bootstrap-icons";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const ChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  //const [isValid, setIsValid] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [GPTbuttonText, setGPTButtonText] = useState("Send");
  const placeholders = [
    "What is your work history?",
    "Where did you go to school?",
    "What are you passionate about?",
    "Whats your favourite song?",
    "Who are you?",
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
    //setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!prompt) {
    //   setIsValid(false);
    //   return;
    // }
    setGPTButtonText("Sending....");
    setResponse("Holli-bot is thinking...");
    axios
      .post("http://localhost:5100/chatgpt", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setGPTButtonText("Send");
    //setPrompt("");
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentPlaceholderIndex(
        (currentPlaceholderIndex + 1) % placeholders.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentPlaceholderIndex, placeholders.length]);

  return (
    <div id="chatgpt-section">
      <div id="chatgpt-content-container">
        <h2>Ask me a question!</h2>
        <p id="gpt-section-tagline">
          Have a look around my website or ask me anything you would like to
          know.
        </p>
        <div id="gpt-info-text" onClick={handleToggleDescription}>
          <InfoCircle />
          <p>What is this tool?</p>
        </div>
        {showDescription && (
          <p id="gpt-explanation-hidden">
            Holli-bot is a chatbot that you can ask any question you like to! It
            was made by using the
            <a href="https://openai.com/" target="_blank" rel="noreferrer">
              {" "}
              OpenAI API for ChatGPT.
            </a>{" "}
            You can ask questions about my work/education history, my experience
            or personal questions about who I am. Give it a go!
          </p>
        )}
        <form
          id="chatgpt-form"
          onSubmit={handleSubmit}
          data-aos="fade-right"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <label htmlFor="question">Ask a question:</label>
          <div id="gpt-input-flex-container">
            <input
              id="question"
              type="text"
              autoComplete="off"
              value={prompt}
              onChange={handlePromptChange}
              placeholder={placeholders[currentPlaceholderIndex]}
              required
            />
            <button type="submit">
              <span>{GPTbuttonText}</span>
            </button>
          </div>
          {/* {!isValid && (
          <p className="validation-message">Please ask me a question!</p>
        )} */}
          <p id="gpt-response">{response}</p>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
