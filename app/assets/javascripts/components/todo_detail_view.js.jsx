var TodoDetailView = React.createClass ({

  render: function () {
    return (
      <div>
        <div>
          {this.props.todo.body}
        </div>
        <button onClick={this.handleDestroy}>Delete</button>
      </div>

    );
  }



});
