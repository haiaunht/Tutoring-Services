import React from "react";
import { isEmailValid } from "../../utils/HelperFunctions";

const SubscriptionForm = (props) => {
  const { email, handleOnChangeEmail, handleSubmitEmail } = props;
  return (
    <section className="subscribe section">
      <div className="subscribe__bg">
        <div className="subscribe__container container">
          <h2 className="section__title subscribe__title">
            Monthly <br /> Newsletter
          </h2>
          <p className="subscribe__description">
            Subscribe to our newsletter and get a special 30% discount.
          </p>

          <form action="" className="subscribe__form" method="post">
            <input
              name="email"
              value={email.email}
              onChange={handleOnChangeEmail}
              type="text"
              placeholder="Enter email"
              className="subscribe__input"
            />

            <button
              className={
                isEmailValid(email.email)
                  ? "button subscribe__button"
                  : "subscribe__button-disabled"
              }
              onClick={handleSubmitEmail}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
