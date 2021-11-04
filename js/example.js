// <!-- Worked with Raj Vekeria -->

// ADD NEW ITEM TO END OF LIST
// https://www.w3schools.com/jsref/met_node_insertbefore.asp

var list = document.getElementsByTagName("UL")[0];
var newItem = document.createElement("LI");
var textnode = document.createTextNode("cream");
newItem.appendChild(textnode);

list.appendChild(newItem, list.childNodes[list.length]);

// ADD NEW ITEM START OF LIST
// https://www.w3schools.com/jsref/met_node_appendchild.asp

var newItem = document.createElement("LI");
var textnode = document.createTextNode("kale");
newItem.appendChild(textnode);

list.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var elements;
elements = document.getElementsByTagName("li");

for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var num = document.createElement("SPAN");
num.innerHTML = elements.length;

var addHead = document.getElementsByTagName("H2")[0];
addHead.appendChild(num);