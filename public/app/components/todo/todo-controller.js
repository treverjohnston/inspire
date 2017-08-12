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
	function getTodos() {
		//FYI DONT EDIT ME :)
		service.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		let template = ''
		let count = 0
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			count++
			if (todo.completed) {
				template += `<div class ="col-xs-12">
							<button class="btn glyphicon glyphicon-ok list btn-xs" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')"></button>	
							<h3 class="list">${todo.title}</h3>
							<button class="btn btn-danger btn-xs list" onclick="app.controllers.todoController.removeTodo('${todo._id}')"> X</button>
						</div>`
			}
			else {
				template += `<div class="col-xs-12">
							<button class="btn btn-default list btn-xs" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">--</button>	
							<h3 class="list">${todo.title}</h3>
							<button class="btn btn-danger btn-xs list" onclick="app.controllers.todoController.removeTodo('${todo._id}')"> X</button>
						</div>`
			}
		}
		console.log(count)
		let countTemplate = `<div class = "count"><h3>${count}</h3></div>`
		document.getElementById('todo').innerHTML = countTemplate + template 
		//DONT FORGET TO LOOP
	}

	function drawToggleOn() {
		document.getElementById('toggle').innerHTML = `
							<button class="btn toggle" onclick="app.controllers.todoController.toggleTodoOff()">-</button>
							<div class="todo">
								<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
									<input type="text" class ="input-field"name="title" placeholder="Item">
									<button type="submit"class="input-field btn">Add</button>
								</form>
								<div class="row">
									<div id="todo">
									</div>
								</div>
							</div>
		`
	}

	function drawToggleOff() {
		document.getElementById('toggle').innerHTML = `
							<button class="btn btn-default toggle" onclick="app.controllers.todoController.toggleTodoOn()">+</button>
		`
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

	this.toggleTodoOn = function () {
		drawToggleOn()
		getTodos()
	}
	this.toggleTodoOff = function () {
		drawToggleOff()
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
}
