
function convertMe() {
    let ounces = document.getElementById('ounces').value;
    
    let convertButton = document.getElementById('convertButton');
    let grams = ounces * 28.3495;
document.getElementById('grams').value = grams;

  } 
      
  convertButton.addEventListener('click', convertMe);
        
