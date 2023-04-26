const send_button = document.querySelector(".button");
send_button.onclick = () =>{

const fname = document.getElementById("fastname").value;
const lname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const number = document.getElementById("number").value;
const message = document.getElementById("message").value;

localStorage.setItem('fistname',fname);
localStorage.setItem('lastname',lname);
localStorage.setItem('email',email);
localStorage.setItem('phonenumber',number);
localStorage.setItem('message',message);

if(fname =="" && lname=="" && email =="" && number=="" && message==""){
    alert("empty fields");

}
else{
    alert("sucussefly");
    
}
}




