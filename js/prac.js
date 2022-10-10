//greeting
/*
input, h1 hidden class 
form eventListener submit
=> prevenntDefault 
=> hidden class remove
=> h1 innnerText = localStorage get username
localStorage userName, inputvalue
if(localStorege username => hiddenclass remove)
function paintGreeting => hiddenclass remove , innerTxt add
*/
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const h1 = document.querySelector("h1");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username) {
  h1.innerText = username;
  localStorage.setItem(USERNAME_KEY, username);
}

function handleLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
}

loginForm.addEventListener("submit", handleLoginSubmit);

if (savedUsername) {
  paintGreeting(savedUsername);
}
