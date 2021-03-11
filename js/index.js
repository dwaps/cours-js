let todos = [];

if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  for (let todo of todos) {
    createTodoTag(todo);
  }
}

function createTodoTag(txtTodo) {
  // DECLARATIONS
  const todoTag = document.createElement('div');
  const textTodoTag = document.createElement('p');
  const btCloseTag = document.createElement('button');
  
  // CONFIGURATIONS
  todoTag.className = "todo";
  todoTag.appendChild(textTodoTag);
  todoTag.appendChild(btCloseTag);
  textTodoTag.innerText = txtTodo;
  btCloseTag.innerHTML = "&times;";
  btCloseTag.onclick = function() {
    todoTag.remove();
  };
  
  // INJECTION DANS LE DOM
  document.querySelector('.todos').appendChild(todoTag);
}

document.querySelector('form').onsubmit = onSubmitForm;

function onSubmitForm(event) {
  event.preventDefault();
  const userInput = document.querySelector('input').value;
  if (userInput.length > 3) {
    createTodoTag(userInput);
    todos.push(userInput);
    localStorage.setItem('todos', JSON.stringify(todos));
    document.querySelector('form').reset();
  }
}
