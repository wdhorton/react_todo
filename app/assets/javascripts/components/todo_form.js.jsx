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
        <h3>Add new todo</h3>
        <label>Title
          <input onChange={this.updateTitle} value={this.state.title} type="text" />
        </label><br/>
        <label>Body
          <input onChange={this.updateBody} value={this.state.body} type="textarea" />
        </label><br/>
        <button>Submit</button>
      </form>
    );
  }
});
