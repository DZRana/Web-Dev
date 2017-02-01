var React = require("react");
var position = require("../styles/_Home").position;

var Home = React.createClass({
  render: function() {
    return(
      <div className="container-fluid text-center" style={position}>
        <h1>Danzel Rana says HI!</h1>
      </div>
    )
  }
});

module.exports = Home;