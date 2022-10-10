// todo list - form input ul li
// input - addeventLister value -> createElement, appendChild
// function paintTodo

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todos";

const savedTodos = localStorage.getItem(TODOS_KEY);

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function todoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((item) => item.id != parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  li.id = newTodo.id;
  button.addEventListener("click", todoDelete);
  button.innerText = "✔";
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
  const todoObj = {
    id: Date.now(),
    text: todo,
  };
  todos.push(todoObj);
  saveTodos();
  paintTodo(todoObj);
}
//todoForm eventListner()
todoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  todos = parsedTodo;

  todos.forEach((element) => {
    paintTodo(element);
  });
}
