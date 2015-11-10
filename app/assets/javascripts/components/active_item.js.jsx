var ActiveItem = React.createClass ({

  render: function () {

    return (
      <div>
        <div onClick={this.handleClick}>
          {this.props.todo.title}
        </div>
        <TodoDetailView todo={this.props.todo} />
        <DoneButton todo={this.props.todo}/>
      </div>
    );
  }
});
