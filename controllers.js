  toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
    var self = this;

    self.todos = [];

    self.addToDo = function(toDoText) {
      self.todos.push(new ToDoFactory(toDoText));
    };

    self.deleteToDo = function() {
      self.todos.splice(-1, 1);
    };

  }]);
