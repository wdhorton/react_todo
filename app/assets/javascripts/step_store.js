(function (root) {
  "use strict";

  var StepStore = root.StepStore = {};
  var _steps = {};
  var _callbacks = [];

  StepStore.changed = function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  };

  StepStore.addChangedHandler = function (callback) {
    _callbacks.push(callback);
  };

  StepStore.removeChangedHandler = function (callback) {
    _callbacks = _callbacks.filter(function (cb) {
      return cb !== callback;
    });
  };

  StepStore.all = function (todoId) {
    return _steps[todoId];
  };

  StepStore.fetch = function (todoId) {
    $.ajax({
      url: "/api/todo/" + todoId + "/steps",
      method: "GET",
      dataType: "JSON",
      success: function (steps) {
        _steps[todoId] = steps;
        StepStore.changed();
      }
    });
  };

  StepStore.create = function (step) {
    $.ajax({
      url: "/api/todo/" + step.todo_id + "/steps",
      method: "POST",
      dataType: "json",
      data: {step: step},
      success: function (response) {
        _steps[step.todo_id] = _steps[step.todo_id] || [];
        _steps[step.todo_id].push(response);
        StepStore.changed();
      }
    });
  };

  StepStore.find = function(id) {
    var todoId = StepStore.findTodoId(id);
    return _steps[todoId].findIndex(function (step) { return step.id === id; });
  };

  StepStore.findTodoId = function (id) {
    for (var todoId in _steps) {
      if (_steps[todoId].some(function (step) { return step.id === id; }))
      return todoId;
    }
    return -1;
  };

  StepStore.destroy = function (id) {
    if (StepStore.find(id) !== -1) {
      $.ajax({
        url: "api/steps/" + id,
        method: "DELETE",
        dataType: "json",
        success: function (response) {
          _steps[StepStore.findTodoId(id)].splice(StepStore.find(id), 1);
          StepStore.changed();
        }
      });
    }
  };

  StepStore.toggleDone = function (id) {
    var step = _steps[StepStore.findTodoId(id)][StepStore.find(id)];
    $.ajax({
      url: "api/steps/" + id,
      method: "PATCH",
      dataType: "json",
      data: {step: {done: !step.done}},
      success: function () {
        step.done = !step.done;
        StepStore.changed();
      }
    });
  };

})(this);
