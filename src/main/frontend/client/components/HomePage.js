import React, { useContext, useState } from "react";
import Notification from "./Notification/Notification";
import CategoryList from "./CategoryList";
import Testimonial from "./Testimonial/Testimonial";
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm";
import Sponsors from "./Sponsors/Sponsors";
import { postData } from "../utils/HelperFunctions";
import { NotificationContext } from "../context/notificationContext";
import _ from "lodash";

const HomePage = () => {
  const [autoPlay, setAutoPlay] = useState(3);
  const [email, setEmail] = useState({ email: "" });
  const { dispatch } = useContext(NotificationContext);

  const sendNotification = (type, message) => {
    switch (type) {
      case "SUCCESS":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: _.uniqueId(),
            type,
            title: "Well done!",
            message: message,
          },
        });
      case "DANGER":
        return dispatch({
          type: "ADD_NOTIFICATION",
          payload: {
            id: _.uniqueId(),
            type,
            title: "Oh snap!",
            message: message,
          },
        });
      default:
        return;
    }
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
      setEmail({ email: "" });
      sendNotification("SUCCESS", response.message);
    } else {
      sendNotification("DANGER", response.message);
    }
  };

  return (
    <>
      <Notification position={"top-right"} autoDeleteInterval={4000} />
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
