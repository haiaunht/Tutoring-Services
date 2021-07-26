import React, { createContext, useReducer } from "react";
import _ from "lodash";

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const exampleNotifications = [
    // {
    //   id: _.uniqueId(),
    //   type: "SUCCESS",
    //   title: "Well done!",
    //   message: "Your message has been sent successfully.",
    // },
    // {
    //   id: _.uniqueId(),
    //   type: "INFO",
    //   title: "Hi there!",
    //   message: "Do you have any problems? Just use this contact form.",
    // },
    // {
    //   id: _.uniqueId(),
    //   type: "WARNING",
    //   title: "Warning",
    //   message: "Sorry! There was a problem with your request",
    // },
    // {
    //   id: _.uniqueId(),
    //   type: "DANGER",
    //   title: "Oh snap!",
    //   message: "Change a few things up and try submitting again",
    // },
  ];

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, action.payload];
      case "DELETE_NOTIFICATION":
        return state.filter(
          (notification) => notification.id !== action.payload
        );
      default:
        return state;
    }
  }, exampleNotifications);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NotificationContext.Provider>
  );
};
