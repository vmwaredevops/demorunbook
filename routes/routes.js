exports.index = function(req, res){
  res.render('index', { title: 'Welcome to VMware Runbook' });
};

exports.about = function(req, res){
  res.render('index', { title: 'Something Else' });
};

var datastore = require("../helpers/datastore.js");

exports.todo = function(req, res){
  var todos = [];
  console.log(datastore);
  datastore.get("Todo", function(err, objs) {
    for(var k in objs) {
      var newTodo = {
        text: objs[k]
      };
      todos.push(newTodo);
    }
    res.render('todo', {
      title: 'New Todo List',
      todos: todos
    });
  });
};



exports.saveTodo = function(req, res) {
  var newTodo = {};
  newTodo.name = req.body['todo-text'];
  newTodo.id = newTodo.name.replace(" ", "-");
  datastore.set("Todo", newTodo.id, newTodo.name);
  res.redirect("back");
};
