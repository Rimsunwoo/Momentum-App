//todoList 만들기
//html form-input / ul

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const todos = [];
const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);
//value save array ()
//function saving(localStorage)
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
//function button click(parent element remove, value = "")
function deleteTodo(e) {
  const todo = e.target.parentsElement;
  todo.remove();
}

//3 funnction paint (submit에서 isolate, savefuc 에서도 사용)\
function paintTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
//2 function input submit(value, create, append/ li 속 span,button => event(click))
function handleTodoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  todos.push(todo);
  saveTodos();
  paintTodo(todo);
}
//1 form event(submit)
todoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos) {
  const todos = JSON.parse(saveTodos);
  todos.forEach((element) => {
    paintTodo(element);
  });
}
