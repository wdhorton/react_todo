var StepList = React.createClass({
  getInitialState: function () {
    return { steps: StepStore.all(this.props.todo.id) };
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
    return (
      <div>
        <ol>
          {
            this.state.steps.map(function(step) {
              return (
                <li key={step.id}>
                  <StepListItem step={step}/>

                </li>
              );
            }.bind(this))
          }
        </ol>
      </div>
    );
  }


});
