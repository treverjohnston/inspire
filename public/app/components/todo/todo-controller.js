function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var service = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos(){
		//FYI DONT EDIT ME :)
		service.getTodos(draw)
	}
 
	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			if (todo.completed){
			template += `<div><h2>${todo.title}</h2></div>
			<button class="btn btn-default" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Checked</button>	
			<button class="btn btn-default" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Remove</button>`	
			}
			else {
			template += `<div><h2>${todo.title}</h2></div>
			<button class="btn btn-default" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Unchecked</button>	
			<button class="btn btn-default" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Remove</button>`	
			}
		}
		document.getElementById('todo').innerHTML = template
		//DONT FORGET TO LOOP
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			title: form.title.value
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		service.addTodo(todo, getTodos)
		form.reset()
		                         //^^^^^^^ EXAMPLE OF HOW TO GET YOUR TODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		service.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		service.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
getTodos()
}
