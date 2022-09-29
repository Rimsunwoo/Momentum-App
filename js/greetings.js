//변수 선언(form, input)
const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-input");

const greeting = document.querySelector("#greeting");

const logoutBtn = document.querySelector("#logout-button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//함수 선언
//preventDefault
//username 변수 선언(+localStorage저장)
//form hidden class추가
//h1 innerText 변경
//h1 hidden class 제거

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}
function logOut(e) {
  localStorage.removeItem("USERNAME_KEY");
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
//이벤트할당(submit)
//조건문
//localStorage => null이면 form
// null 아니면 h1
const savedUsername = localStorage.getItem("USERNAME_KEY");
loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", logOut);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(savedUsername);
}
