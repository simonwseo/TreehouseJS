const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');


//iterates through the list items and applies callback functions for the specified event types
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('mouseover', () => {
//       listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });
//
//     listItems[i].addEventListener('mouseout', () => {
//       listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// }

   //Using the Event Bubbling method
    listDiv.addEventListener('mouseover', (event) => {
      //using event.target.tagName, run the funcition only if it's a list item
      if (event.target.tagName.toLowerCase() === 'li'){
        //using event.target, replace the textContent
            event.target.textContent = event.target.textContent.toUpperCase();
      }
    });

    //Same logic as above but in mouseout version
    listDiv.addEventListener('mouseout', (event) => {
      if (event.target.tagName.toLowerCase() === 'li'){
            event.target.textContent = event.target.textContent.toLowerCase();
      }
    });



     // listDiv.addEventListener('mouseout', (event) => {
     // listItems[i].textContent = listItems[i].textContent.toLowerCase();
     // });


//When any element is clicked, its information will be displayed in the console.

// document.addEventListener('click', (event) => {
//Because of even bubbling, when any child element of the document is clicked, the document's event handler will become triggered.

//   console.log(event.target);
// })




//Shows/hides the div on-click
toggleList.addEventListener ('click', () => {
  if (listDiv.style.display == 'none'){
     toggleList.textContent = 'Hide list';
     listDiv.style.display = 'block';
  }else{
     //When the button is pressed, the text content of the button will change to 'Show List'
      toggleList.textContent = 'Show list';
      listDiv.style.display = 'none';
  }
})

//Replacing the div content w innerHTML
descriptionButton.addEventListener('click', () => {
  // p.textContent = input.value + ':';
     descriptionP.innerHTML = descriptionInput.value + ':';
})

//Adding items on the list
addItemButton.addEventListener('click', () => {
  //selecting the ul

  let ul = document.getElementsByTagName('ul')[0];
  //creating a new list element
  let li = document.createElement('li');
  //condition to prevent empty lists
  if (addItemInput.value.length < 1 || addItemInput.value == ' '){
    alert('Enter a letter or a word');
  }else{
  //store the input value inside the newly created item
  li.textContent = addItemInput.value;
  //Add the list item onto the webpage inside ul tag
  ul.appendChild(li);
}
  addItemInput.value = '';
})

//removing last item on the list
removeItemButton.addEventListener('click', () => {
  //selecting the ul
  let ul = document.getElementsByTagName('ul')[0];
  //selecting the last list item
  let li = document.querySelector('li:last-child');


  ul.removeChild(li);

})
