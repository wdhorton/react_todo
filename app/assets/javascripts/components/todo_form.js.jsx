var TodoForm = React.createClass({
  getInitialState: function() {
    return {title: "", body: ""};
  },

  updateTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  updateBody: function(e) {
    this.setState({ body: e.currentTarget.value });
  },

  handleSubmit: function(e) {
    TodoStore.create(this.state);
    this.setState({title: "", body: ""});
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input onChange={this.updateTitle} value={this.state.title} type="text" />
        </label>
        <label>Body
          <input onChange={this.updateBody} value={this.state.body} type="textarea" />
        </label>
        <button>Submit</button>
      </form>
    );
  }
});
