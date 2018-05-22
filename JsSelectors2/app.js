const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children


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
    // listDiv.addEventListener('click', (event) => {
    //

      //using event.target.tagName, run the funcition only if it's a list item
      // if (event.target.tagName.toLowerCase() === 'button' && event.target.parentNode.tagName === 'LI'){
        //using event.target, replace the textContent
    //         let li = event.target.parentNode;
    //         let ul = li.parentNode;
    //         ul.removeChild(li);
    //   }
    // });

    //Same logic as above but in mouseout version
    // listDiv.addEventListener('mouseout', (event) => {
    //   if (event.target.tagName.toLowerCase() === 'li'){
    //         event.target.textContent = event.target.textContent.toLowerCase();
    //   }
    // });



     // listDiv.addEventListener('mouseout', (event) => {
     // listItems[i].textContent = listItems[i].textContent.toLowerCase();
     // });


//When any element is clicked, its information will be displayed in the console.

// document.addEventListener('click', (event) => {
//Because of even bubbling, when any child element of the document is clicked, the document's event handler will become triggered.

//   console.log(event.target);
// })


//^^^^^^^^^^^EXAMPLES COMMENTED OUT^^^^^^^^^^^^^^^^^^^^^^^

function attatchListItemButtons(li){
  let up = document.createElement('button');
  up.className ='up';
  up.textContent = 'Up';
  li.appendChild (up);
  let down = document.createElement('button');
  down.className ='down';
  down.textContent = 'Down'
    li.appendChild (down);
  let remove = document.createElement('button');
  remove.className ='remove';
  remove.textContent = 'Remove'
    li.appendChild (remove);
}

//iterates thorugh the children list items and adds the buttons 
for (let i = 0; i < lis.length; i += 1){
  attatchListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove'){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    // moves the elements up the list
    if (event.target.className == 'up'){
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;

      if (prevLi){
      ul.insertBefore(li,prevLi);
      }
    }
      //moves the elements down the list
      if (event.target.className == 'down'){
        let li = event.target.parentNode;
        let afterLi = li.nextElementSibling;
        let ul = li.parentNode;

        if (afterLi){
        ul.insertBefore(afterLi,li);
        }
    }
  }
})




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




addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');

  li.textContent = addItemInput.value;
  attatchListItemButtons(li);
  ul.appendChild(li);
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
