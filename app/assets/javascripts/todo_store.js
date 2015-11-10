(function (root) {
  "use strict";
  var TodoStore = root.TodoStore = {};
  var _todos = [];
  var _callbacks = [];

  TodoStore.changed = function () {
    _callbacks.forEach(function (callback) {
      callback();
    });
  };

  TodoStore.addChangedHandler = function (callback) {
    _callbacks.push(callback);
  };

  TodoStore.removeChangedHandler = function (callback) {
    _callbacks.filter(function (cb) {
      return cb !== callback;
    });
  };

  TodoStore.all = function () {
    return _todos;
  };

  TodoStore.fetch = function () {
    $.ajax({
      url: "/api/todo",
      method: "GET",
      dataType: "JSON",
      success: function (todos) {
        _todos = todos;
        TodoStore.changed();
      }
    });
  };

  TodoStore.create = function (todo) {
    $.ajax({
      url: "api/todo",
      method: "POST",
      dataType: "json",
      data: {todo: todo},
      success: function (response) {
        _todos.push(response);
        TodoStore.changed();
      }
    });
  };

  TodoStore.find = function(id) {
    return _todos.findIndex(function (todo) { return todo.id === id; });
  };

  TodoStore.destroy = function (id) {
    if (TodoStore.find(id) !== -1) {
      $.ajax({
        url: "api/todo/" + id,
        method: "DELETE",
        dataType: "json",
        success: function () {
          _todos.splice(TodoStore.find(id), 1);
          TodoStore.changed();
        }
      });
    }
  };

  TodoStore.toggleDone = function (id) {
    $.ajax({
      url: "api/todo/" + id,
      method: "PATCH",
      dataType: "json",
      data: {todo: {done: !_todos[TodoStore.find(id)].done}},
      success: function () {
        _todos[TodoStore.find(id)].done = !_todos[TodoStore.find(id)].done;
        TodoStore.changed();
      }
    });
  };

})(this);
