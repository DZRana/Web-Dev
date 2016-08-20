var Nav = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
        		<div className="navbar-header">
          			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            			<span className="icon-bar"></span> 
            			<span className="icon-bar"></span>
            			<span className="icon-bar"></span>
          			</button>
         			<a className="navbar-brand" href="file:///C:/Users/danze/workspace/Web%20Dev/Web-Dev/Portfolio/index.html">Danzel Rana</a>
        		</div>
        		<div className="collapse navbar-collapse" id="myNavbar">
          			<ul className="nav navbar-nav navbar-right">
            			<li><a href="#about">About</a></li>
            			<li><a href="#portfolio">Portfolio</a></li>
            			<li><a href="#contact">Contact</a></li>
          			</ul>
        		</div>
      		</nav>
		);
	}
});

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<div className="text-center" id="about">	
					<div className="row">
						<div className="col-md-6">
							<h1>Hey, there! My name is Danzel and I'm a software
							engineer and aspiring web developer. I graduated from California
							State Polytechnic University, Pomona with a Bachelor's degree in Computer Science
							and am focusing my career on Full Stack Web Development.</h1>
							<h2>{this.props.titles}</h2>
						</div>
						<div className="col-md-6">
							<h1>TEST</h1>
						</div>
					</div>	
				</div>		
			</header>
		);
	}
});

var Main = React.createClass({
	render: function() {
		return (
			<main>
				<div className="text-center" id="portfolio">
				</div>
			</main>
		);
	}
});

var Content = React.createClass({
	render: function() {
		return (
			<div>
				<Nav />	
				<Header titles="Web Developer - Software Engineer"/>
				<Main />
			</div>
		);
	}
});

ReactDOM.render(<Content />, document.getElementById("content-container"));