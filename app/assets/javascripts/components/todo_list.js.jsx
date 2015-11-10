var TodoList = React.createClass({
  getInitialState: function () {
    return { todos: TodoStore.all() };
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function () {
    return (
      <div>
        <TodoForm />
        <ul>
          {
            this.state.todos.map(function (todo) {
              return <li key={todo.id}><TodoListItem todo={ todo }/></li>;
            })
          }
        </ul>
      </div>
    );
  },

  todosChanged: function () {
    this.setState({ todos: TodoStore.all() });
  }



});
