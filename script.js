const addTodo = (event) => {
  // Append todo item onto the todo list
  event.preventDefault();

  const todoTextInput = document.getElementById('text-input');
  let todoText = todoTextInput.value;
  if (!todoText) return;
  if (todoText.length > 50) todoText = `${todoText.substring(0, 50)}...`;
  todoTextInput.value = '';

  const divTodoList = document.getElementById('todo-list');
  const divTodoItem = createTodo(todoText);
  divTodoList.appendChild(divTodoItem);
}

const toggleTodoComplete = (event) => {
  // Change font to strikethrough if checkbox is checked, and vice versa
  const checkbox = event.target;
  const label = checkbox.parentElement;
  label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

const removeTodo = (event) => {
  // Remove item from todo list
  event.target.parentElement.remove();
}

const createTodo = (todoText) => {
  // Create the div that will display each todo list item
  const divTodoItem = document.createElement('div');
  divTodoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('boxes');
  checkbox.addEventListener('change', toggleTodoComplete);

  const label = document.createElement('label');
  const labelText = document.createTextNode(todoText);
  label.appendChild(checkbox);
  label.appendChild(labelText);
  divTodoItem.appendChild(label);

  const img = document.createElement('img');
  img.src = 'remove.png';
  img.alt = 'remove button';
  img.addEventListener('click', removeTodo);
  divTodoItem.appendChild(img);

  return divTodoItem;
}

const todoForm = document.getElementById('todo-form')
todoForm.addEventListener('submit', addTodo);