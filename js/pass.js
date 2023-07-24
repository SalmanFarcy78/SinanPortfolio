var myPassword = "1";
var userPassword = prompt("Please enter the code:");
if (myPassword === userPassword) {
  alert("Access granted!");
  window.location.href="#";
} 
else {
    alert("Access denied!");
    window.location.href = "@";
}




/*{
window.alert("hello, welcome to my web page. Now type your age.")
var age = prompt("Please enter your age:");
window.alert("Thanks a lot, now you can enter my site");
 document.write("Your age is: " +  age);
}*/