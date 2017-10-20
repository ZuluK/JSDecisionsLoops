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



//working within the DOM in JS
//Accessing and changing a text node

var itemTwo = document.getElementById('one'); // get first list itemTwo
var elText = itemTwo.firstChild.nodeValue; //get it's text content
elText = elText.replace('pinenuts','kale'); //change text from pinenuts to kale
itemTwo.firstChild.nodeValue = elText; //update the node value


//access and update text with textcontent
//One of the issues with texContent property is that Internet Explorer didn't support in unit IE9
//All other major browsers support it


//Accessing Text only
var firstItem = document.getElementById('one'); //find first item list
var showTextContent = firstItem.textContent;//Get value of textContent
var showInnerText = firstItem.innerHTML; //Get value of inner Text

//Show the context of these two properties at the end of the list
var msg = '<p>'textContent: ' + ' + showTextContent + '</p>';
    msg += '<p>'innerHTML + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';     
