import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const ChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  //const [isValid, setIsValid] = useState(true);
  const [GPTbuttonText, setGPTButtonText] = useState("Send");

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="chatgpt-section">
      <h2>Ask me a question!</h2>
      <p>
        Have a look around my website or ask me anything you would like to know
      </p>
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
            required
          />
          <button type="submit">
            <span>{GPTbuttonText}</span>
          </button>
        </div>
        {/* {!isValid && (
          <p className="validation-message">Please ask me a question!</p>
        )} */}
        <p>{response}</p>
      </form>
    </div>
  );
};

export default ChatBox;
