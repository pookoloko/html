
function getMessage() {
  // to get userName value
  let userName = document.getElementById('uName').value;
  //to get password value
  let password = document.getElementById('pWord').value;
  
  let regEx = /[@][A-Z][a-z]+[-\_\!][0-9]{2,15}/; 
  let regEx2 = /[_][A-Z]+[!\?\.][0-9]{2,15}/; 

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

document.getElementById('btnLogin').addEventListener('click',getMessage);
