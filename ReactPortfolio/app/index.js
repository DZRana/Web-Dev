var React = require("react");
var ReactRouter = require("react-router");
var ReactDOM = require("react-dom");
var routes = require("./config/routes.js");

ReactDOM.render (
  routes,
  document.getElementById("app")
);