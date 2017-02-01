var BG = require('../images/bg/html-bg.jpg');

var _Main = {
  bgImg: {
    filter: 'blur(3px)',
    background: 'url(' + BG + ')', 
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100vw',
    height: '100vh'
  },
  navbarBorder: {
    borderBottom: '5px solid #ff5722'
  }
}

module.exports = _Main;