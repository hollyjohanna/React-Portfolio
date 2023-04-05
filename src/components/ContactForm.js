import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  useEffect(() => {
    if (showValidationMessage) {
      const timeoutId = setTimeout(() => {
        setShowValidationMessage(false);
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [showValidationMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending....");
    let response = await fetch("http://localhost:5100/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200 || 204) {
      setStatus({ success: true, message: "Message Sent!" });
      setShowValidationMessage(true);
    } else {
      setStatus({ success: false, message: "Message sending failed" });
      setShowValidationMessage(true);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact-form-section">
      <h2>Contact Me!</h2>
      <p id="contactform-tagline-mobile">Don't be shy, drop me a line!</p>
      <p id="contactform-tagline">
        Don't be shy, drop me a line! I'm always happy to hear from new people
        to discuss potential projects. I'm always keen to get started on a new
        and awesome design, looking forward to hearing from you!
      </p>
      <form
        id="contactform"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="Your Name Here..."
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
            id="firstname"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            value={formDetails.lastName}
            placeholder="Your Name Here..."
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
            id="lastname"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={formDetails.email}
            placeholder="your@email.com"
            onChange={(e) => onFormUpdate("email", e.target.value)}
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            value={formDetails.message}
            placeholder="Your Message Here"
            onChange={(e) => onFormUpdate("message", e.target.value)}
            id="message"
            required
          />
        </div>
        <button type="submit">
          <span>{buttonText}</span>
        </button>
        {showValidationMessage && (
          <p className={status.success === false ? "danger" : "success"}>
            {" "}
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
