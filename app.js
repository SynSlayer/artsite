/* eslint-disable */

'use strict'


var isCorrect = false;;

while(!isCorrect){
    var answer = prompt("Would you like to enter? Y/N");
    if(answer.toLowerCase() === 'y'){
        alert('Welcome!');
        isCorrect = true;
    } else{
        alert('Then you shoud leave...')
    }
}
function fullName(){

    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');
    alert("Welcome " + firstName + ' ' + lastName);

}

function realAge(){
    var age = prompt("What is your age?");
    var year = (new Date()).getFullYear() - age;
    alert('You were born in ' + year);
    return year;

}

function favoriteColor(){
    var color = prompt('What is your favorite color?');
    alert('I like the ' + color + ' too');
    return color.toLowerCase();
}

var devNames = ['Davian, ', 'Wade, ', 'Anna-Marie'];
for(var i=0; i <devNames.length; i++){
    console.log(devNames[i]);
}

fullName();
realAge();
favoriteColor();

//<script type="text/javascript">
//function getItems()
//{
//var items = new Array();
//var itemCount = document.getElementsByClassName("items");
//var total = 0;
//for(var i = 0; i < itemCount.length; i++)
//{
//    total = total +  document.getElementById("p"+(i+1)).value;
//}
//return total;
//document.getElementById('tot').value= total;
//}
//getItems()</script>