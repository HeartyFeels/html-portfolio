// CHanging greeting
const am = document.querySelector('#am')
const pm = document.querySelector('#pm')
const greet = document.querySelector('#greeting')
am.addEventListener('click', ()=>{
    greet.textContent = "Good Morning"
})

pm.addEventListener('click', ()=>{
    greet.textContent = "Good Night"
})

// Switching Background color

const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const divColor = document.querySelector('.bg_grey')

red.addEventListener('click', ()=>{
    divColor.setAttribute('class', 'bg_red');
})

yellow.addEventListener('click', ()=>{
    divColor.setAttribute('class', 'bg_yellow');
})

green.addEventListener('click', ()=>{
    divColor.setAttribute('class', 'bg_green');
})

blue.addEventListener('click', ()=>{
    divColor.setAttribute('class', 'bg_blue');
})

// Dynamic List

const inputBox = document.querySelector('#usrInput');
const addButton = document.querySelector('#addBtn');
const list = document.querySelector('#myUL');

addButton.addEventListener('click', () => {
    // Getting user input and clearing the input box
    const userInput = inputBox.value;
    inputBox.value = '';

    // Creating a new list item
    const listItem = document.createElement('li');
    listItem.textContent = userInput;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Adding an event listener to the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    // Appending the delete button to the list item
    listItem.appendChild(deleteButton);

     // Appending the new list item to the list
     list.appendChild(listItem);

})