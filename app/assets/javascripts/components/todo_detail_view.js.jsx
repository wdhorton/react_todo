var TodoDetailView = React.createClass ({
  getInitialState: function () {
    return { steps: StepStore.all(this.props.todo.id) };
  },

  handleDestroy: function (e) {
    TodoStore.destroy(this.props.todo.id);
  },

  stepsChanged: function () {
    this.setState({ steps: StepStore.all(this.props.todo.id) });
  },

  componentWillUnmount: function () {
    StepStore.removeChangedHandler(this.stepsChanged);
  },

  componentDidMount: function () {
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todo.id);
  },

  render: function () {
    var steps;

    if (this.state.steps) {
      steps = <ol>
        {
          this.state.steps.map(function(step) {
            return (
              <li key={step.id}>
                <StepListItem step={step}/>

              </li>
            );
          }.bind(this))
        }
      </ol>;
    }

    return (
      <div>
        <div>
          {this.props.todo.body}
        </div>
        <button onClick={this.handleDestroy}>Delete Todo</button>
          {steps}
        <StepForm todo={this.props.todo}/>
      </div>
    );
  }

});
