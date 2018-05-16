//Examples on selecting elements by tag name

//selects all list items in the document
const myList = document.getElementsByTagName('li');

//iterates through the entire list and changes them to purple
for (let i = 0; i < myList.length; i++){
  myList[i].style.color = 'purple';
}

//Selecting elements through their class Names
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < myList.length; i++){
  errorNotPurple[i].style.color = 'red';
}
