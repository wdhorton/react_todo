var TodoListItem = React.createClass ({
  getInitialState: function () {
    return { showDetail: false };
  },

  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },

  handleClick: function () {
    this.setState({ showDetail: !this.state.showDetail });
  },

  render: function () {
    var detail;
    if (this.state.showDetail) {
      detail = <TodoDetailView todo={this.props.todo} />;
    }
    return (
      <div onClick={this.handleClick}>
        <div>
          {this.props.todo.title}
        </div>
        {detail}
        <DoneButton todo={this.props.todo}/>
      </div>
    );
  }
});
