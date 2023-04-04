import React, { useState } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="App">
      {/* Render the button only if showButton is true */}
      {showButton && (
        <ArrowUpCircle className="scroll-to-top-button" onClick={scrollToTop} />
      )}
    </div>
  );
};

export default ScrollToTopBtn;
