//Decision and Loops

var table = 3; //Unit of table
var operator = 'addition'; //type of calculation
var i = 1; //set counter to 1
var msg = '';

if (operator === 'addition') { //if the operator variable says addition
  while (i < 11) { //While counter is less than 11
    msg += i + ' + ' table + ' = ' + (i + table) + '<br/>'; //Calculation
    i++;
  }
} else {
  while (i < 11) { //While counter is less than 11
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>'; //Calculation
    i++;
  }
}

//Write the message on the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;


//create a NodeList containing elements with a class and store in variable
var elements = document.getElementsByClassName('className');
if (elements.length >= 1){ //if that number is greater than or equal to one then run code
  var firstItem = elements[0];
}

var elements = document.getElementsByClassName('hot'); //find hot items

if(element.length > 2){//if three or more is found
  var el = elements[2];
  el.className = 'cool';
}
//Looping through a NodeList
var hotItems = document.querySelectorAll('li.hot'); //Store nodelist in array

if (hotItems.length > 0){//If it contains items
  for (var i = 0; i < hotItems.length; i++){//loop through each item
    hotItems[i].className = 'cool';//change value of class attribute 
  }
}
