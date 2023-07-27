import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const age = 27;

function reducer(state = age, action) {
  if (action.type === "increase") {
    state++;
    return state;
  } else if (action.type === "decrease") {
    state--;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
