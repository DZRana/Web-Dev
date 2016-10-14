var React = require("react");
var ReactDOM = require("react-dom");
var Board = require("./components/Board");
var Comment = require("./components/Comment")

ReactDOM.render(
  <div>
    <Comment>Leave a Note!</Comment>
  </div>,
  document.getElementById("sticky-notes")
);