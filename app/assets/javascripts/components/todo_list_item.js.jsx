var TodoListItem = React.createClass ({
  getInitialState: function () {
    return { showDetail: false };
  },

  handleClick: function () {
    this.setState({ showDetail: !this.state.showDetail });
  },

  render: function () {
    var detail;
    if (this.state.showDetail && this.props.active === "true") {
      detail = <TodoDetailView todo={this.props.todo} />;
    }
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.props.todo.title}
        </div>
        {detail}
        <DoneButton todo={this.props.todo}/>
      </div>
    );
  }
});
