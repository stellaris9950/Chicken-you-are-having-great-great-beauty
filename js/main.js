// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');


// Array Storing Username & password
let info = loadStorage();



// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if(newPassword === confirmPassword){
    info.push(newUser(newUsername, newPassword));
    saveInfo();
    alert("SIGN UP SUSSCEFULL")
  }
  else{
    alert("ERROR")
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let inputUsername = document.getElementById("inputUsername").value;
  let inputPassword = document.getElementById("inputPassword").value;
  for (let i = 0; i < info.length; i++){
    if (inputUsername === info[i].username && inputPassword === info[i].password) {
      alert(`Sign in Suscessful. Welcome, User ${inputUsername}`)
    }else{
      alert(`invalid sign in.`)
    }
  }
  
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
  localStorage.setItem('info', JSON.stringify(info))
}


// load Contact from local storage

function loadStorage() {
  let infoStr = localStorage.getItem('info');
  return JSON.parse(infoStr) ?? [];
}