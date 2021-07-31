import React, { useState, useEffect } from "react";
import { isEmailValid } from "../../utils/FetchData/HelperFunctions";

const SubscriptionForm = (props) => {
  const { email, handleOnChangeEmail, handleSubmitEmail } = props;
  const [buttonClassName, setButtonClassName] = useState("");

  useEffect(() => {
    isEmailValid(email.email)
      ? setButtonClassName("button subscribe__button")
      : setButtonClassName("subscribe__button-disabled");
    return () => setButtonClassName("");
  }, [email]);

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

          <form
            autoComplete="off"
            className="subscribe__form"
            method="post"
            onSubmit={handleSubmitEmail}
          >
            <input
              name="email"
              value={email.email}
              onChange={handleOnChangeEmail}
              type="text"
              placeholder="Enter email"
              className="subscribe__input"
            />

            <input
              type="submit"
              className={buttonClassName}
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionForm;
