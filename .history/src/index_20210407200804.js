import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//bootstrap nhúng trong javascript để dễ kiểm soát
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/jquery/dist/jquery.slim";
import "../node_modules/popper.js/dist/popper";

export class index extends Component {
  render() {
    return <div></div>;
  }
}

export default index;

export default class index extends Component {
  render() {
    return <div></div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();