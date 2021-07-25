import React, { createContext, useReducer } from "react";
import _ from "lodash";

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const notifications = [
    {
      id: _.uniqueId(),
      type: "SUCCESS",
      title: "Successfully done task",
      message: "Task done, tara!",
    },
  ];

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return state;
      case "DELETE_NOTIFICATION":
        return state;
      default:
        return state;
    }
  }, notifications);

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
};
