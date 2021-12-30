import React from "react";
import { render } from "react-dom";
import App from "./app";

const targetElement = document.querySelector("div#app");

render(<App title={"Tasty Treats"} />, targetElement);
