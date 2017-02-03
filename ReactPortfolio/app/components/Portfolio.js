var React = require("react");
var RouteTransition = require("react-router-transition").RouteTransition;
var divStyle = require("../styles/_Portfolio").divStyle;

var Portfolio = React.createClass({
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
        <h1>hi</h1>
      </RouteTransition>
    )
  }
});

module.exports = Portfolio;