
function getMessage() {
  // to get userName value
  let userName = document.getElementById('uName').value;
  //to get password value
  let password = document.getElementById('pWord').value;
  
  let regEx = /^[a-zA-Z_][a-zA-Z0-9_]{2,15}$/; 
  let regEx2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{8,}$/; 

  if (regEx.test(userName)) { 
    document.getElementById('uMsg').innerHTML = "";
  } else { 
    document.getElementById('uMsg').innerHTML = "This is invalid Username!";
  }
  if (regEx2.test(password)) { 
    document.getElementById('pMsg').innerHTML = "";
  }else{ 
    document.getElementById('pMsg').innerHTML = "This is invalid Password!";
  }
  if (regEx.test(userName) && regEx2.test(password)){ 
    document.getElementById('lMsg').innerHTML = "Login Successfully!";
    
  } else { 
    document.getElementById('lMsg').innerHTML = "";
  }
} //end of getMessage

//addEventListener Login

document.getElementById('btnLogin').addEventLi