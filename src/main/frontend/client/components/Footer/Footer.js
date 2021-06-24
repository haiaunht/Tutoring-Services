import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer section">
        <div class="footer__container container grid">
          <div class="footer__content grid">
            <div class="footer__data">
              <h3 class="footer__title">AStudy</h3>
              <p class="footer__description">
                You choose the course,
                <br /> we offer you the best
                <br /> experience.
              </p>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="footer__social"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  class="footer__social"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="footer__social"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  class="footer__social"
                >
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">Learning</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Get the app
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Pricing
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    New & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">More</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Instructors
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Training Webinars
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Become a member
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">Support</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    FAQs
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Support Center
                  </a>
                </li>
                <li class="footer__item">
                  <Link to="/contact" class="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer__rights">
            <p class="footer__copy">&#169; 2021 AStudy. All rights reserved.</p>
            <div class="footer__terms">
              <a href="#" class="footer__terms-link">
                Terms & Agreements
              </a>
              <a href="#" class="footer__terms-link">
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
