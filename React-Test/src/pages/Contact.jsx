import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/Contact/ContactForm";

import portfolioData from "../data/portfolioData";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar
        name={portfolioData.name}
        tag={portfolioData.tag}
      />

      <main className="contact-page">
        <div className="container">

          <div className="contact-heading">
            <h1>Contact Me</h1>

            <p>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <ContactForm
            developerName={portfolioData.name}
          />

        </div>
      </main>
    </>
  );
};

export default Contact;