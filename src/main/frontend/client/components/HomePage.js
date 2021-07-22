import React, { useState } from "react";
import CategoryList from "./CategoryList";
import Testimonial from "./Testimonial/Testimonial";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm";
import Sponsors from "./Sponsors/Sponsors";
import _ from "lodash";
import { postData } from "../utils/HelperFunctions";

const HomePage = () => {
  const [autoPlay, setAutoPlay] = useState(3);
  const [email, setEmail] = useState({ email: "" });
  const [error, setError] = useState("");

  const handleOnChangeEmail = (e) => {
    const { name, value } = e.currentTarget;
    e.preventDefault();
    console.log(e.currentTarget);
    setEmail({ [name]: value });
    console.log(email);
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    const response = await postData("api/v1/subscription", email);
    if (_.isEmpty(response)) {
      setEmail({ email: "" });
      // TODO: sendAlert("success");
    } else {
      setError(response);
      // TODO: sendAlert("error");
    }
  };

  return (
    <>
      <CategoryList />
      <Testimonial autoPlay={autoPlay} setAutoPlay={setAutoPlay} />
      <SubscriptionForm
        email={email}
        handleOnChangeEmail={handleOnChangeEmail}
        handleSubmitEmail={handleSubmitEmail}
      />
      <Sponsors />
    </>
  );
};

export default HomePage;
