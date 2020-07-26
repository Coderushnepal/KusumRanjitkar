
function form(){

var x = document.getElementById("form_sample");
var form = document.createElement('form'); 
form.setAttribute("action", ""); 
form.setAttribute("name", "vform"); 
// form.setAttribute("onsubmit",validate());
x.appendChild(form);



// Heading of Form
var heading = document.createElement('h2'); 
heading.innerHTML = "Register Here ";
form.appendChild(heading);

// Giving Horizontal Row After Heading
var line = document.createElement('hr'); 
form.appendChild(line);

var linebreak = document.createElement('br');
form.appendChild(linebreak);


var user_div =document.createElement("div");
form.appendChild(user_div);
var namelabel = document.createElement('label'); 
namelabel.innerHTML = "Username  "; 
user_div.appendChild(namelabel);

var username = document.createElement('input'); // Create Input Field for Name
username.setAttribute("type", "text");
username.setAttribute("name", "username");
username.setAttribute("id", "username");
username.setAttribute("placeholder", "Enter Username");
username.setAttribute("class", "textInput");
user_div.appendChild(username);

var name_error=document.createElement('div');
name_error.setAttribute("id","name_error");
user_div.appendChild(name_error);

var linebreak = document.createElement('br');
form.appendChild(linebreak);


// Email
var email_div =document.createElement("div");
form.appendChild(email_div);
var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = " Email ";
email_div.appendChild(emaillabel);

var email= document.createElement('input'); // Create Input Field for E-mail
email.setAttribute("type", "text");
email.setAttribute("name", "email");
email.setAttribute("id", "email");
email.setAttribute("class", "textInput");
email.setAttribute("placeholder", "Enter Email Address");
email_div.appendChild(email);

var email_error=document.createElement('div');
email_error.setAttribute("id","email_error");
email_div.appendChild(email_error);

var emailbreak = document.createElement('br');
form.appendChild(emailbreak);


// password
var password_div =document.createElement("div");
form.appendChild(password_div);

var passwordlabel = document.createElement('label'); 
passwordlabel.innerHTML = "Password";
password_div.appendChild(passwordlabel);

var password=document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("name","password");
password.setAttribute("id","password");
password.setAttribute("class","textInput");
password.setAttribute("placeholder","Enter Password");
password_div.appendChild(password);


var password_error= document.createElement("div");
password_error.setAttribute("id" ,"password_error");
password_div.appendChild(password_error);


// password again
var password_error=document.createElement("div");
password_div.appendChild(password_error);


var passwordlabel = document.createElement('label'); 
passwordlabel.innerHTML = "Password Again";
password_div.appendChild(passwordlabel);

var password_confirm=document.createElement("input");
password_confirm.setAttribute("type","password");
password_confirm.setAttribute("name","password_confirm");
password_confirm.setAttribute("id","password_confirm");
password_confirm.setAttribute("class","textInput");
password_confirm.setAttribute("placeholder","Enter Password Again");
password_div.appendChild(password_confirm);

var password_confirm_error= document.createElement("div");
password_confirm_error.setAttribute("id" ,"password_confirm_error");
password_div.appendChild(password_confirm_error);


var submit = document.createElement('input'); // Append Submit Button
submit.setAttribute("type", "submit");
submit.setAttribute("name", "register");
submit.setAttribute("value", "register");
submit.setAttribute("class", "btn");
submit.setAttribute("id", "btn");
form.appendChild(submit);
 

};


form();