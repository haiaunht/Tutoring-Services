import React, { useState } from "react";
import CategoryList from "./CategoryList";
import Testimonial from "./Testimonial/Testimonial";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm";
import Sponsors from "./Sponsors/Sponsors";
import _ from "lodash";
import { useNotification } from "../hooks/useNotification";
import { postData } from "../utils/FetchData/HelperFunctions";

const HomePage = () => {
  const [autoPlay, setAutoPlay] = useState(3);
  const [email, setEmail] = useState({ email: "" });
  const dispatch = useNotification();

  const sendNotification = (type, message) => {
    dispatch({
      type,
      message,
      title:
        type === "SUCCESS" ? "Well done!" : type === "DANGER" ? "Oh snap!" : "",
    });
  };

  const handleOnChangeEmail = (e) => {
    const { name, value } = e.currentTarget;
    e.preventDefault();
    setEmail({ [name]: value });
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    const response = await postData("/api/v1/subscription", email);
    if (response.message === "Successfully subscribed. Thank you.") {
      sendNotification("SUCCESS", response.message);
      setEmail({ email: "" });
    } else {
      sendNotification("DANGER", response.message);
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
