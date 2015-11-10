var StepListItem = React.createClass({

  handleStepDelete: function () {
    StepStore.destroy(this.props.step.id);
  },

  render: function () {
    return (
      <div>
        {this.props.step.description}
        <StepDoneButton step={this.props.step} />
        <button onClick={this.handleStepDelete}>Delete</button>
      </div>
    );
  }
});
