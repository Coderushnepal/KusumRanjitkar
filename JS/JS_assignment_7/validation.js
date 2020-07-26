
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password_confirm= document.getElementById("password_confirm");
var submit=document.getElementById("btn")


var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');





submit.addEventListener('click', (e) =>
{
e.preventDefault();
    
    
    if (username.value == " " || username.value.length < 3)
     {
        username.style.border = "1px solid red";
        name_error.innerHTML= "Username must be at least 3 characters";
        name_error.style.color="red";
      }
     else
      {
        username.style.border = "1px solid green";
         name_error.innerHTML = "";
      
      }
    
      
      if (email.value == "") 
      {
        email.style.border = "1px solid red";
        email_error.innerHTML = "Email is required";
        email_error.style.color="red";
    
    
      }
      else  
      {
        email.style.border = "1px solid green";
        email_error.innerHTML = "";
        
      }
    
    
  
    
     if (password.value = " " || password.value.length<=6) {
      password.style.border="1px solid red";
      password_error.innerHTML="Password must be at least 6 characters"
      password_error.style.color="red";
      
       }
    
      else 
      {
        password.style.border = "1px solid green";
      password_error.innerHTML = "";

    }
  

      // check if the two passwords match
      if (password.value != password_confirm.value)
       {
        password.style.border = "1px solid red";
        // document.getElementById('pass_confirm_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_confirm_error.innerHTML = "The two passwords do not match";
        password_confirm_error.style.color="red";
        
      }
      else 
      {
        password.style.border = "1px solid green";
        // document.getElementById('pass_confirm_div').style.color = "#5e6e66";
        password_error.innerHTML = "";
      
    }
  }

);
