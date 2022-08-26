let nextId = 0;

const addTodo = (event) => {
  // Append todo item onto the todo list
  event.preventDefault();

  const todoTextInput = document.getElementById('todo-input');
  const todoText = todoTextInput.value;
  todoTextInput.value = '';

  const divTodoList = document.getElementsByClassName('todo-list')[0];
  const divTodoItem = createTodo(todoText);
  divTodoList.appendChild(divTodoItem);
}

const toggleTodoComplete = (event) => {
  // Change font to strikethrough if checkbox is checked, and vice versa
  const checkbox = event.target;
  const index = checkbox.id.split('-')[1];
  const label = document.getElementById(`todo-${index}`);

  if (checkbox.checked) {
    label.style.textDecoration = 'line-through';
  } else {
    label.style.textDecoration = 'none';
  }
}

const removeTodo = (event) => {
  // Remove item from todo list
  const index = event.target.id.split('-')[1];
  document.getElementById(`todo-item-${index}`).remove();
}

const createTodo = (todoText) => {
  // Create the div that will display each todo list item
  const id = nextId;
  nextId++;

  const divTodoItem = document.createElement('div');
  divTodoItem.classList.add('todo-item');
  divTodoItem.id = `todo-item-${id}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('boxes');
  checkbox.id = `box-${id}`;
  checkbox.addEventListener('change', toggleTodoComplete);
  divTodoItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.id = `todo-${id}`;
  label.textContent = todoText;
  divTodoItem.appendChild(label);

  const img = document.createElement('img');
  img.src = 'remove.png';
  img.alt = 'remove button';
  img.id = `remove-${id}`;
  img.addEventListener('click', removeTodo);
  divTodoItem.appendChild(img);

  return divTodoItem;
}

const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', addTodo);