var React = require("react");
var Comment = require("./Comment");

var Board = React.createClass({
  getInitialState: function() {
    return {
      comments: ["t1","t2","t3"]
    }
  },
  deleteComment: function(i) {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({comments: arr});
  },
  updateComment: function(i, newText) {
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({comments: arr});
  },
  eachComment: function(i, text) {
    return (
      <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.deleteComment}>
        {text}
      </Comment>
    );
  },
  render: function() {
    return (
      <div>
        {this.state.comments.map(this.eachComment)};
      </div>
    )
  }
});

module.exports = Board;