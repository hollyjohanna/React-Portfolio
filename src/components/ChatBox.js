import React, { useState } from "react";
import axios from "axios";

const ChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  //  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [GPTbuttonText, setGPTButtonText] = useState("Send");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5100/chatgpt", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setGPTButtonText("Send");
    setPrompt("");
  };

  return (
    <div id="chatgpt-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Ask a question:</label>
        <input
          id="question"
          type="text"
          value={prompt}
          onChange={handlePromptChange}
        />
        <button type="submit">
          <span>{GPTbuttonText}</span>
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default ChatBox;
