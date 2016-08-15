var Movie = React.createClass ({
	render: function() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.genre}</h2>
			</div>
		);
	}
});

ReactDOM.render(<div>
					<Movie title="Avatar" genre="Action"/>
					<Movie title="The Notebook" genre="Romance"/>
					<Movie title="Star Wars" genre="Action"/>
				</div>, document.getElementById("example"));