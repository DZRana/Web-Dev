var React = require("react");
var Comment = require("./Comment");

var Board = React.createClass({
  getInitialState: function() {
    return {
      comments: []
    }
  },
  add: function(text) {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments: arr});
  },
  deleteComment: function(i) {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({comments: arr});
  },
  updateComment: function(newText, i) {
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments: arr});
  },
  eachComment: function(text, i) {
    return (
      <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.deleteComment}>
        {text}
      </Comment>
    );
  },
  render: function() {
    return (
      <div>
        <button onClick={this.add.bind(null, "Default Text")} className="btn btn-info">Add New</button>
        <div className="board">
          {this.state.comments.map(this.eachComment)}
        </div>
      </div>
    )
  }
});

module.exports = Board;