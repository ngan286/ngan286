function login1signup0(){
    element1 = document.getElementById("login");
  if (element1.className == "containerLoginHidden") {
    element1.className = "containerLogin";
  } else element1.className = "containerLoginHidden";
  element2 = document.getElementById("signup");
  if (element2.className == "containerSignup") {
    element2.className = "containerSignupHidden";
  } else element2.className = "containerSignup";
}

function login0signup1(){
    element1 = document.getElementById("login");
  if (element1.className == "containerLogin") {
    element1.className = "containerLoginHidden";
  } else element1.className = "containerLogin";
  element2 = document.getElementById("signup");
  if (element2.className == "containerSignupHidden") {
    element2.className = "containerSignup";
  } else element2.className = "containerSignupHidden";
}