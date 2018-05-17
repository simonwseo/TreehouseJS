//Examples on selecting elements by tag name.

//selects all list items in the document
const myList = document.getElementsByTagName('li');

//iterates through the entire list and changes them to purple
for (let i = 0; i < myList.length; i++){
  myList[i].style.color = 'purple';
}

//Selecting elements through their class Names
const errorNotPurple = document.getElementsByClassName('error-not-purple');

//Changes all elements with class name error-not-purple to red
for (let i = 0; i < errorNotPurple.length; i++){
  errorNotPurple[i].style.color = 'red';
}

//selecting an entire group of elements using querySelectorAll
//This example uses pseudo CSS class to select just the even items
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i++){
 evens[i].style.backgroundColor = 'lightgray';
}
