//Examples on selecting elements by tag name

//selects all list items in the document
const myList = document.getElementsByTagName('li');

//iterates through the entire list and changes them to purple
for (let i = 0; i < myList.length; i++){
  myList[i].style.color = 'purple';
}
