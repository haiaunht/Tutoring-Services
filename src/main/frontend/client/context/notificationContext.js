import React, { createContext, useReducer } from "react";
import _ from "lodash";
import Notification from "../components/Notification/Notification";

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "DELETE_NOTIFICATION":
        return state.filter((notification) => notification.id !== action.id);
      default:
        return state;
    }
  }, []);

  let currentPosition =
    state.length && state[0].position ? state[0].position : "top-right";

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      <div
        className={`notification__container notification__container--${currentPosition}`}
      >
        {state.map((note) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};
