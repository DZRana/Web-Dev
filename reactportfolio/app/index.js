var React = require("react");
var ReactDOM = require("react-dom");
var Board = require("./components/Board");
var Comment = require("./components/Comment")

ReactDOM.render(
  <div>
    <Board />
  </div>,
  document.getElementById("sticky-notes")
);