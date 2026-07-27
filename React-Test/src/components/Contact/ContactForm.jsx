import { useState } from "react";
import SuccessCard from "./SuccessCard";
import "./ContactForm.css";

const ContactForm = ({ developerName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="send-btn"
        >
          Send
        </button>
      </form>

      {isSubmitted && (
        <SuccessCard
          userName={formData.name}
          developerName={developerName}
        />
      )}
    </>
  );
};

export default ContactForm;