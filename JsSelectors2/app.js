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
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// function disableUpDown(li){
//
//
//   let parent = li.parentNode;
//   let first = parent.firstElementChild;
//   let last = parent.lastElementChild;
//   let bttnUp = li.querySelector('button.up');
//   let bttnDown = li.querySelector('button.down');
//
//
//     if (li == first){
//     bttnUp.disabled = true;
//     }else if (li == last){
//     bttnDown.disabled = true;
//     }else{
//       bttnUp.disabled = false;
//       bttnDown.disabled = false;
//     }
// }


//
// for (let i = 0; i < lis.length; i += 1){
//     disableUpDown(lis[i]);
// }

function disableUpDown(li){

  for (let i = 0; i < lis.length; i += 1){
  let parent = li[i].parentNode;
  let first = parent.firstElementChild;
  let last = parent.lastElementChild;
  let bttnUp = li[i].querySelector('button.up');
  let bttnDown = li[i].querySelector('button.down');


    if (li[i] == first){
    bttnUp.disabled = true;
  }else if (li[i] == last){
    bttnDown.disabled = true;
    }else{
      bttnUp.disabled = false;
      bttnDown.disabled = false;
    }
  }
}



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
  disableUpDown(lis);

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove'){
      let li = event.target.parentNode;
      let ul = li.parentNode;

      ul.removeChild(li);
      disableUpDown(lis);
    }
    // moves the elements up the list
    if (event.target.className == 'up'){
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;

      if (prevLi){
      ul.insertBefore(li,prevLi);
      disableUpDown(lis);
      }
    }
      //moves the elements down the list
      if (event.target.className == 'down'){
        let li = event.target.parentNode;
        let afterLi = li.nextElementSibling;
        let ul = li.parentNode;

        if (afterLi){
        ul.insertBefore(afterLi,li);
        disableUpDown(lis);
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
      toggleList.textContent = 'Show list';
      listDiv.style.display = 'none';
  }
})

//Replacing the div content w innerHTML
descriptionButton.addEventListener('click', () => {
     descriptionP.innerHTML = descriptionInput.value + ':';
})

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');

  li.textContent = addItemInput.value;
  attatchListItemButtons(li);
  ul.appendChild(li);
  disableUpDown(lis);
  addItemInput.value = '';
})


removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');

  ul.removeChild(li);
  disableUpDown(lis);
})
