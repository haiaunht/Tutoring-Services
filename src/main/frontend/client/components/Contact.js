import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";

const Contact = (props) => {
  return (
    <section className="section container" id="contact">
      <span className="section-subtitle">Contact Us</span>
      <h2 className="section-title">We'd love to hear from you</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
