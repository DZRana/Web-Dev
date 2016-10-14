var React = require("react");

var Comment = React.createClass({
  getInitialState: function() {
    return {editing: false}
  },
  edit: function() {
    this.setState({editing: true});
  },
  delete: function() {
    alert("delete clicked");
  },
  save: function() {
    var val = this.refs.newText.value;
    console.log(val);
    this.setState({editing: false});
  },
  renderNormal: function() {
    return (
      <div className="text-center">
        <div>{this.props.children}</div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={this.edit} className="btn btn-primary">Edit</button>
          </div>
          <div className="col-md-6">
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    )
  },
  renderForm: function() {
    return(
      <div className="text-center">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn btn-success">Save</button>
      </div>
    )
  },
  render: function() {
    if (this.state.editing) return this.renderForm();
    else return this.renderNormal();
  }
});

module.exports = Comment;