import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import store from "./store";
import store from "./store";
// import { SnackbarProvider } from "notistack";

 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={3000}
      > */}
        <App />
      {/* </SnackbarProvider> */}
    </Provider>
  </React.StrictMode>
);
