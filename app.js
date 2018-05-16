const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const reset = document.getElementById('reset');
const randColor = document.getElementById('randColor');

//Changes the headline to red when the button is clicked
myButton.addEventListener('click', () => { myHeading.style.color = 'red';});

//Changes the headline to the value written in input when button is clicked
myButton.addEventListener('click', () => { myHeading.style.color = myTextInput.value;});

//Resets the headline color to black
reset.addEventListener('click', () => {myHeading.style.color = 'black'});

//Generate a random color when button is clicked

//First, create a function that returns a random number between 0-255 (rgb value)
const generateColor = () => {
  let x = Math.floor(Math.random() * 256);
  return x;
};

//Second, create another function that returns a random string of rgb value using the first function
//This function will generate a brand new random rgb string value each time it is called
const colorValue = () => {
let randomColor = "rgb(" + generateColor() + ',' + generateColor() + ',' + generateColor() + ')' ;
return randomColor
}

//When user clicks the randColor button, the headline color will change to a random color.
//Each time the button is pressed, colorValue() will generate a new rgb value.
randColor.addEventListener('click', () => {myHeading.style.color = colorValue() });
