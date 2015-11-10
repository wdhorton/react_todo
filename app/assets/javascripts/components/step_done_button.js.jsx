var StepDoneButton = React.createClass({
  handleStepDone: function (e) {
    e.preventDefault();
    StepStore.toggleDone(this.props.step.id);
  },

  render: function() {
    var text = this.props.step.done ? "Undo Step" : "Step Done";

    return (
      <button onClick={this.handleStepDone}>
        {text}
      </button>

    );
  }

});
