//TODO: Pull these from some repo -- wherever Chris says (local storage or a web API)
//TODO: Prolly add priorities and dates to todos
// Some fake todos
const todos = [
  { id: 1, priority: 1, description: "Cure cancer" },
  { id: 2, priority: 2, description: "Prove mood landing was a hoax" },
  { id: 3, priority: 3, description: "Decide whether taco or tuna fish sandwich would win in a fist fight" },
  { id: 4, priority: 1, description: "Write 16th book" },
  { id: 5, priority: 2, description: "Try new wine" },
]

let todoList = document.getElementById('todolist');
let todoForm = document.getElementById('todoForm');
let descriptionInput = document.getElementById('description');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = descriptionInput.value;
  todo = {
    id: 1, //Change this!
    description: description,
    priority: 1,  // Maybe should read this from a dropdown/radio/whatever
  }
  console.log("Adding ", todo)
  addTodo(todo)
  descriptionInput.value = "";
})

/**
 * Adds a new todo/task
 * @param {} todo The todo to add
 */
function addTodo(todo) {
  todos.push(todo);
  drawTodos();
}

/**
 * Draws all the todos
 */
function drawTodos() {
  todoList.innerHTML = "";
  for (let todo of todos) {
    const newItem = document.createElement('li');
    newItem.classList.add('todo');
    if (todo.priority === 1)
      newItem.classList.add('important');
    newItem.dataset.todoId = todo.id;
    const newContent = document.createTextNode(todo.description);
    newItem.appendChild(newContent);
    todoList.appendChild(newItem);
  }
}

document.addEventListener('DOMContentLoaded', drawTodos)