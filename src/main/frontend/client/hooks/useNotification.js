import { useContext } from "react";
import { NotificationContext } from "../context/notificationContext";

export const useNotification = () => {
  const { dispatch } = useContext(NotificationContext);

  return (props) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: _.uniqueId(),
        ...props,
      },
    });
  };
};
