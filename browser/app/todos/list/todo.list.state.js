// define a `todos` state which resolves all `todos`.
// note: it isn't tested, but you should also wire up the
// associated controller and templateUrl for a functioning app.

app.config(function($stateProvider){
  $stateProvider.state("todos", {
    url: '/todos',
    template: "app/todos/list/todo.list.html",
    controller: 'TodoListCtrl',
    resolve: {
      todos: function(Todo, $stateParams, $log) {
        return Todo.getAll()
      }
    },
  })
})
