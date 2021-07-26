import React, { useContext } from "react";
import { NotificationContext } from "../../context/notificationContext";

const Notification = ({ position, autoDeleteInterval }) => {
  const { state, dispatch } = useContext(NotificationContext);

  const removeNotification = (id) => {
    dispatch({
      type: "DELETE_NOTIFICATION",
      payload: id,
    });
  };

  const checkRemovalTimeout = (id) => {
    if (autoDeleteInterval) {
      setInterval(() => {
        removeNotification(id);
      }, autoDeleteInterval);
    } else {
      setInterval(() => {
        removeNotification(id);
      }, 4000);
    }
  };

  const generateIcon = (type) => {
    switch (type) {
      case "SUCCESS":
        return <i className="fas fa-check"></i>;
      case "INFO":
        return <i className="fas fa-info"></i>;
      case "WARNING":
        return <i className="fas fa-exclamation"></i>;
      case "DANGER":
        return <i className="fas fa-times"></i>;
      default:
        return;
    }
  };

  const generateContentBackgroundColor = (type) => {
    switch (type) {
      case "SUCCESS":
        return "#2D6A4F";
      case "INFO":
        return "#B8B5FF";
      case "WARNING":
        return "#FCA652";
      case "DANGER":
        return "#F05454";
      default:
        return;
    }
  };

  const generateIconBackgroundColor = (type) => {
    switch (type) {
      case "SUCCESS":
        return "#004440";
      case "INFO":
        return "#7868E6";
      case "WARNING":
        return "#CC561E";
      case "DANGER":
        return "#AF2D2D";
      default:
        return;
    }
  };

  const notificationList = state.map((notification) => {
    checkRemovalTimeout(notification.id);
    return (
      <div
        key={notification.id}
        style={{ position: "relative", marginBottom: "20px" }}
      >
        <div
          className="notification__content"
          style={{
            background: generateContentBackgroundColor(notification.type),
          }}
        >
          <div className="notification__circles">
            <div
              className="notification__circle-1"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
            <div
              className="notification__circle-2"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
            <div
              className="notification__circle-3"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
            <div
              className="notification__circle-4"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
            <div
              className="notification__circle-5"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
            <div
              className="notification__circle-6"
              style={{
                background: generateIconBackgroundColor(notification.type),
              }}
            ></div>
          </div>
          <div className="notification__body">
            <div className="notification__title">{notification.title}</div>
            <div className="notification__message">{notification.message}</div>
          </div>
        </div>
        <div
          className="notification__icon"
          style={{
            background: generateIconBackgroundColor(notification.type),
          }}
        >
          {generateIcon(notification.type)}
          <div
            className="notification__icon-square"
            style={{
              background: generateIconBackgroundColor(notification.type),
            }}
          ></div>
        </div>
        <div
          className="notification__close-button"
          onClick={() => {
            removeNotification(notification.id);
          }}
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`notification__container notification__container--${position}`}
    >
      {notificationList}
    </div>
  );
};

export default Notification;
