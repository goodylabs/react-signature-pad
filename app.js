import React from "react";
import ReactDOM from "react-dom";
import SignaturePad from "./src/index";

const test = function() {
  console.log('@@@cleared')
};

ReactDOM.render(
  <SignaturePad clearButton="true" onClear={test.bind(this)} />,
  document.getElementById('container')
)
