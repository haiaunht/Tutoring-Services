import React, { useContext, useState, useEffect } from "react";
import { NotificationContext } from "../../context/notificationContext";

import PropTypes from "prop-types";

const Notification = ({ id, message, type, title, autoCloseTime }) => {
  const { dispatch } = useContext(NotificationContext);
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, autoCloseTime / 200);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "DELETE_NOTIFICATION",
        id: id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

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
        return "#739BE5";
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
        return "#3F62A1";
      case "WARNING":
        return "#CC561E";
      case "DANGER":
        return "#AF2D2D";
      default:
        return;
    }
  };

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      style={{ position: "relative", marginBottom: "20px" }}
      className={`${exit ? "out" : "in"}`}
    >
      <div
        className="notification__content"
        style={{
          background: generateContentBackgroundColor(type),
        }}
      >
        <div className="notification__circles">
          <div
            className="notification__circle-1"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
          <div
            className="notification__circle-2"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
          <div
            className="notification__circle-3"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
          <div
            className="notification__circle-4"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
          <div
            className="notification__circle-5"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
          <div
            className="notification__circle-6"
            style={{
              background: generateIconBackgroundColor(type),
            }}
          ></div>
        </div>
        <div className="notification__body">
          <div className="notification__title">{title}</div>
          <div className="notification__message">{message}</div>
        </div>
      </div>
      <div
        className="notification__icon"
        style={{
          background: generateIconBackgroundColor(type),
        }}
      >
        {generateIcon(type)}
        <div
          className="notification__icon-square"
          style={{
            background: generateIconBackgroundColor(type),
          }}
        ></div>
      </div>
      <div
        className="notification__close-button"
        onClick={() => {
          // handleCloseNotification();
          setWidth((current) => (current = 100));
        }}
      >
        <i className="fas fa-times"></i>
      </div>
      <div
        className={"notification__time-bar"}
        style={{
          width: `${width}%`,
        }}
      />
    </div>
  );
};

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  autoCloseTime: PropTypes.number,
};

Notification.defaultProps = {
  type: "INFO",
  title: "",
  autoCloseTime: 4000,
};

export default Notification;
