var Header = React.createClass({
	render: function() {
		return (
			<header>
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
			</header>
		);
	}
});

var Main = React.createClass({
	render: function() {
		return (
			<main>
				<h3>test main</h3>
			</main>
		);
	}
});

var Content = React.createClass({
	render: function() {
		return (
			<div>			
				<Header titles="Web Developer - Software Engineer"/>
				<Main />
			</div>
		);
	}
});

ReactDOM.render(<Content />, document.getElementById("content-container"));