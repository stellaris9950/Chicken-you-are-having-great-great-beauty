// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');


// Array Storing Username & password
let info = localStorage();



// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  console.log('Sign Up Btn Clicked');
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
    let newUser
    let newPassord
    info.push(newUser(newUsername, newPassord));
    saveInfo();
}






// helper functions

// new user
function newUser(newUsername, newPassord){
  return {
    username: newUsername,
    password: newPassord
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