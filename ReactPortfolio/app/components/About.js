var React = require("react");
var divStyle = require("../styles/_About").divStyle;
var imgStyle = require("../styles/_About").imgStyle;
var txtStyle = require("../styles/_About").txtStyle;
var Link = require("react-router").Link;
var RouteTransition = require("react-router-transition").RouteTransition;
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Image = require("react-bootstrap").Image;
var Button = require("react-bootstrap").Button;

//TODO: FIX GRID and BUTTON

var About = React.createClass({
  render: function() {
    return(
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="jumbotron text-center" 
        style={divStyle}
      >
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src={require("../images/danzel.jpg")} circle style={imgStyle}/>
            </Col>
            <Col xs={12} md={8}>
              <h2 style={txtStyle}>Hey, there! My name is Danzel and I'm a software engineer and aspiring 
              web developer. I graduated from California State Polytechnic University, 
              Pomona with a Bachelor's degree in Computer Science, and I'm currently 
              focusing my career on Full Stack Web Development.</h2>
            </Col>
          </Row>
        </Grid>
        <Link to="/portfolio">
          <Button type="button" className="btn btn-lg btn-success">Portfolio</Button>
        </Link>
      </RouteTransition>
    )
  }
});

module.exports = About;