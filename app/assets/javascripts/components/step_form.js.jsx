var StepForm = React.createClass({
  getInitialState: function () {
    return { description: "" };
  },

  addNewStep: function (e) {
    e.preventDefault();
    StepStore.create({description: this.state.description, todo_id: this.props.todo.id});
    this.setState({description: ""});
  },

  updateDescription: function (e) {
    this.setState({ description: e.currentTarget.value });
  },

  render: function () {
    return (
      <form onSubmit={this.addNewStep}>
        <input type="text"
          onChange={this.updateDescription} value={this.state.description} />
        <button>Add New Step</button>

      </form>
    );
  }

});
