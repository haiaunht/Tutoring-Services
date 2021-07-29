import React, { useState } from "react";
import { useNotification } from "../../hooks/useNotification";
import { Validators } from "../../utils/Validator/Validator";
import { RadioInput } from "./RadioInput";
import { TextInput } from "./TextInput";

export const ContactForm = (props) => {
  const INITIAL_VALUE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "frontEnd",
    message: "",
  };
  const [values, setValues] = useState(INITIAL_VALUE);
  const { firstName, lastName, email, phone, course, message } = values;
  const dispatch = useNotification();

  const sendNotification = (type, msg, autoCloseTime) => {
    dispatch({
      type,
      message: msg,
      title:
        type === "SUCCESS"
          ? "Well done!"
          : type === "DANGER"
          ? "Oh snap!"
          : type === "INFO"
          ? "Hi there,"
          : "",
      autoCloseTime,
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendNotification("INFO", "Your message is sending...", 2000);
  };

  return (
    <>
      <div className="contact-form__container">
        <div className="contact-form__left-side">
          <div className="contact-form__left-side-circles">
            <div className="contact-form__left-side-circle--big"></div>
            <div className="contact-form__left-side-circle--small-1"></div>
            <div className="contact-form__left-side-circle--small-2"></div>
            <div className="contact-form__left-side-circle--small-3"></div>
            <div className="contact-form__left-side-circle--small-4"></div>
            <div className="contact-form__left-side-circle--small-5"></div>
            <div className="contact-form__left-side-circle--small-6"></div>
            <div className="contact-form__left-side-circle--small-7"></div>
          </div>
          <div className="contact-form__left-side-content">
            <div className="contact-form__left-side-header">
              <h3 className="contact-form__left-side-header-title">
                Let's talk
              </h3>
              <p className="contact-form__left-side-header-text">
                Ask us anything or just say hi...
              </p>
            </div>
            <div className="contact-form__left-side-body">
              <div className="contact-form__left-side-body-content">
                <i className="fas fa-phone-alt"></i>
                <p>+0123 4567 8910</p>
              </div>
              <div className="contact-form__left-side-body-content">
                <i className="fas fa-envelope"></i>
                <p>astudy7121@gmail.com</p>
              </div>
              <div className="contact-form__left-side-body-content">
                <i className="fas fa-map-marker-alt"></i>
                <p>92 Random Street, WA 98765</p>
              </div>
            </div>
            <div className="contact-form__left-side-footer">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="contact-form__left-side-footer-social"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="contact-form__left-side-footer-social"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="contact-form__left-side-footer-social"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="contact-form__left-side-footer-social"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form__right-side">
          <TextInput
            styleClass={"contact-form__text-input  w-47"}
            label="First Name"
            onChange={handleOnChange}
            placeholder={"Sang"}
            value={firstName}
            name="firstName"
            validators={[
              {
                check: Validators.required,
                message: "This field is required.",
              },
            ]}
          />
          <TextInput
            styleClass={"contact-form__text-input  w-47"}
            label="Last Name"
            onChange={handleOnChange}
            placeholder={"Vo"}
            value={lastName}
            name="lastName"
            validators={[
              {
                check: Validators.required,
                message: "This field is required.",
              },
            ]}
          />
          <TextInput
            styleClass={"contact-form__text-input  w-47"}
            label="Email"
            onChange={handleOnChange}
            type="email"
            placeholder={"yauacom@yahoo.com"}
            value={email}
            name="email"
            validators={[
              {
                check: Validators.email,
                message: "Please enter a valid email.",
              },
            ]}
          />
          <TextInput
            styleClass={"contact-form__text-input  w-47"}
            label="Phone"
            onChange={handleOnChange}
            placeholder={"123 456 7890"}
            value={phone}
            name="phone"
            validators={[
              {
                check: Validators.required,
                message: "This field is required.",
              },
            ]}
          />
          <div className="contact-form__text-input w-100">
            <p className="input__label">What course would you like?</p>
            <RadioInput
              name={"course"}
              value={course}
              onChange={handleOnChange}
              options={[
                { val: "frontEnd", text: "Front-end" },
                { val: "backEnd", text: "Back-end" },
                { val: "database", text: "Database" },
                { val: "algorithm", text: "Algorithm" },
              ]}
            />
          </div>
          <TextInput
            styleClass={"contact-form__text-input w-100"}
            label="Message"
            onChange={handleOnChange}
            placeholder={"Write your message..."}
            value={message}
            name="message"
            validators={[
              {
                check: Validators.required,
                message: "This field is required.",
              },
            ]}
          />
          <div className="contact-form__text-input w-100">
            <button
              type="button"
              className="button contact-form__button-submit"
              onClick={handleOnSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
