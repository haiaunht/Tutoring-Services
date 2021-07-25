import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { NotificationContextProvider } from "./context/notificationContext";

ReactDOM.render(
  <NotificationContextProvider>
    <App />
  </NotificationContextProvider>,
  document.getElementById("app")
);
