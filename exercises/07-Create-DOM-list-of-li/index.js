let beginning = "<ul>";
let liststring = "";
let ending = "</ul>";

// do not modify after this line
liststring = "<li>First Item</li>" + "<li>Second Item</li>"+ "<li>Third Item</li>";
htmlString = beginning + liststring + ending;
document.body.innerHTML = htmlString;
