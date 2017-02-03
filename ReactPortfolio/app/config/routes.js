var React = require("react");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var hashHistory = require("react-router").hashHistory;
var Main = require("../components/Main");
var Home = require("../components/Home");
var About = require("../components/About");
var Portfolio = require("../components/Portfolio");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>
)

module.exports = routes;