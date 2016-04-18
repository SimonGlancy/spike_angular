  toDoApp.controller('ToDoController', function() {
    var self = this;

    self.todos = [{text: "this sucks", completed:true},
                  {text: "no it totally sucks", completed:false}];

    self.addToDo = function(toDoText) {
      self.todos.push({text: toDoText, completed: false});
    };

    self.deleteToDo = function() {
      self.todos.splice(-1, 1);
    };
  });
