const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');



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
