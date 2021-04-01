// get the interactive parts of the page and store them in JS variables
let myButton1 = document.querySelector("#signin1");
let myButton2 = document.querySelector("#signin2");
let myHeading1 = document.querySelector("#username1");

// TUTORIAL: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
// regular expression to identify HTML tags in the input string, replacing the identified tag with a null string.
function removeTags(str)
{
  if (str===null || str==="")
    return "guest";
  else
    str = str.toString();
  
  return str.replace( /(<([^>]+)>)/ig, '');
}

// TUTORIAL: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
// Get a username from the user, store it in their local storage, and update the interactive text elements on the page
function setUserName() {
    let myName = prompt("Enter username:");
    if (myName == "") myName = "guest";
    myName = removeTags(myName);
    localStorage.setItem("name", myName);
    myHeading1.textContent = myName;
}

// TUTORIAL: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
// if the user already has a name when the page loads, put it in the interactive text parts of the page
if(localStorage.getItem("name")) {
    let storedName = localStorage.getItem("name");
    myHeading1.textContent = storedName;
}

// set functions for signin button clicks
myButton1.onclick = function() {
    setUserName();
}
myButton2.onclick = function() {
    setUserName();
}