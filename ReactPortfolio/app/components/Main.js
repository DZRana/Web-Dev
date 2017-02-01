var React = require("react");
var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var Button = require("react-bootstrap").Button;
var bgImg = require("../styles/_Main").bgImg;
var navbarBorder = require("../styles/_Main").navbarBorder;

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <div style={bgImg}></div>
        <Navbar className="navbar-inverse navbar-fixed-top" style={navbarBorder}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link 1</NavItem>
              <NavItem eventKey={2} href="#">Link 2</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;