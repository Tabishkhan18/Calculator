let string = "";
let isResult = false; // Track if the result has been evaluated
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        try {
            string = eval(string).toString();
        }
        catch{
            string = "Error";
        }
        document.querySelector('input').value = string;
        isResult = true; // Set flag to true when result is evaluated
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    }

    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})