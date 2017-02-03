var React = require("react");
var Link = require("react-router").Link;
var RouteTransition = require("react-router-transition").RouteTransition;
var Button = require("react-bootstrap").Button;
var divStyle = require("../styles/_Home").divStyle;
var nameStyle = require("../styles/_Home").nameStyle;
var subNameStyle = require("../styles/_Home").subNameStyle;

//TODO: FIX BUTTON

var Home = React.createClass({
  render: function() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="jumbotron text-center"
        style={divStyle}
      >
        <h1 style={nameStyle}>Danzel Rana</h1>
        <h2 style={subNameStyle}>Web Developer-Software Engineer</h2>
        <Link to="/about">
          <Button type="button" className="btn btn-lg btn-success">About Me</Button>
        </Link>
      </RouteTransition>
    )
  }
});

module.exports = Home;