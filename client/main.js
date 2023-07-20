let todoList = document.getElementById('todolist');
//todoList.innerHTML = 'You have no todo items';

const newItem = document.createElement('li');
newItem.classList.add('todo', 'red');
newItem.classList.add('important');

const newContent = document.createTextNode('do Something');
newItem.appendChild(newContent);
todoList.appendChild(newItem);
