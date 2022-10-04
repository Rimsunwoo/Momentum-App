// todo list - form input ul li
// input - addeventLister value -> createElement, appendChild
// function paintTodo

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const todos = [];
const TODOS_KEY = "todos";

const savedTodos = localStorage.getItem(TODOS_KEY);

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const li = event.target.parentElement;
  const todo = event.target.parentElement;
  console.dir(todo);
  localStorage.removeItem(todo);
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo;
  button.addEventListener("click", todoDelete);
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//todoSubmit function
function handleTodoSubmit(e) {
  //preventDefault, createElement li>span,button appendChild button addEventListener
  e.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  todos.push(todo);
  saveTodos();
  paintTodo(todo);
}
//todoForm eventListner()
todoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos !== null) {
  const parsedTodo = JSON.parse(savedTodos);
  todos = parsedTodo;
  // parsedTodo.forEach(paintTodo);
}
