// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');


// Array Storing Username & password
let info = loadStorage();



// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let newUsername = document.getElementById("newUsername");
  let newPassword = document.getElementById("newPassword");
  info.push(newUser(newUsername, newPassword));
  saveInfo();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
    
}



// helper functions

// new user
function newUser (newUsername, newPassword){
  return {
    username: newUsername,
    password: newPassword
  };
}

// save global Contact to local storage
function saveInfo() {
  localStorage.setItem('Info', JSON.stringify(info))
}


// load Contact from local storage

function loadStorage() {
  let infoStr = localStorage.getItem('info');
  return JSON.parse(infoStr) ?? [];
}