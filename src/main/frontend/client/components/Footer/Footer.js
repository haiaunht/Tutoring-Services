import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer section" id="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div className="footer__data">
              <h3 className="footer__title">AStudy</h3>
              <p className="footer__description">
                You choose the course,
                <br /> we offer the best
                <br /> experience.
              </p>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="footer__social"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="footer__social"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="footer__social"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="footer__social"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="footer__data">
              <h3 className="footer__subtitle">Learning</h3>
              <ul>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Get the app
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Pricing
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    New & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__data">
              <h3 className="footer__subtitle">More</h3>
              <ul>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Instructors
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Training Webinars
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Become a member
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__data">
              <h3 className="footer__subtitle">Support</h3>
              <ul>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    FAQs
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Support Center
                  </a>
                </li>
                <li className="footer__item">
                  <Link to="/contact" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__rights">
            <p className="footer__copy">
              &#169; 2021 AStudy. All rights reserved.
            </p>
            <div className="footer__terms">
              <a href="#" className="footer__terms-link">
                Terms & Agreements
              </a>
              <a href="#" className="footer__terms-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
