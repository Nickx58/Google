/* basic of DOM Start*/

const elemet = document.createElement('h1');
elemet.innerText = "Google is Magic";
document.body.appendChild(elemet);

/* basic of DOM END*/

/* 
    basic of Selector Start.
    How to get element with ID and Class
*/

const divWithID = document.getElementById('div-id');
divWithID.style.color = 'RED';

const divWithClass = document.getElementsByClassName('div-class'); // return a collection of Html elements

// We use Array.from to convert any thing similar to array in array
// Beacuse getElementsByClassName return HTML collection which is not an array.
// So we cannot use array method like forEach
// divWithClass[0].style.color = "Blue" -> this we can use 

const divWithClassArray = Array.from(divWithClass);
divWithClassArray.forEach(div => div.style.color = "green");

/* 
    basic of Selector End.
*/