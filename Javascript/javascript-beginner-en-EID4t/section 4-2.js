// Add your code below this line!
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false, false);
xhr.send();


// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);