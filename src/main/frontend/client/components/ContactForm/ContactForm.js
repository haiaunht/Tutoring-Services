import React, { useState } from "react";
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

  const handleOnChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({ [name]: value });
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
          <div className="contact-form__text-input w-47">
            <TextInput />
          </div>
          <div className="contact-form__text-input w-47">
            <TextInput />
          </div>
          <div className="contact-form__text-input w-47">
            <TextInput />
          </div>
          <div className="contact-form__text-input w-47">
            <TextInput />
          </div>
          <div className="contact-form__text-input w-100">
            <p className="input__label">What course would you like?</p>
            <label className="input__radio-label">
              <input
                type="radio"
                checked={course === "frontEnd"}
                name="course"
                onChange={handleOnChange}
                value="frontEnd"
                className="input__radio"
              />
              <span className="input__radio-btn">
                <i className="fas fa-check"></i>
              </span>
              <span className="input__radio-text">Front-end</span>
            </label>
            <label className="input__radio-label">
              <input
                type="radio"
                checked={course === "backEnd"}
                name="course"
                onChange={handleOnChange}
                value="backEnd"
                className="input__radio"
              />
              <span className="input__radio-btn">
                <i className="fas fa-check"></i>
              </span>
              <span className="input__radio-text">Back-end</span>
            </label>
            <label className="input__radio-label">
              <input
                type="radio"
                checked={course === "database"}
                name="course"
                onChange={handleOnChange}
                value="database"
                className="input__radio"
              />
              <span className="input__radio-btn">
                <i className="fas fa-check"></i>
              </span>
              <span className="input__radio-text">Database</span>
            </label>
            <label className="input__radio-label">
              <input
                type="radio"
                checked={course === "algorithm"}
                name="course"
                onChange={handleOnChange}
                value="algorithm"
                className="input__radio"
              />
              <span className="input__radio-btn">
                <i className="fas fa-check"></i>
              </span>
              <span className="input__radio-text">Algorithm</span>
            </label>
          </div>
          <div className="contact-form__text-input w-100">
            <label htmlFor="message" className="input__text-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="0"
              rows="3"
              placeholder="Write your message..."
              className="input__text-field"
            ></textarea>
          </div>
          <div className="contact-form__text-input w-100">
            <button className="button contact-form__button-submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
