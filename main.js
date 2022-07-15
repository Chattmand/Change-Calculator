// Write your JavaScript here
function handleClickEvent(e){
let changeReceived=document.getElementById("amount-received").value;
let itemPrice=document.getElementById("amount-due").value;
let returnedChange=parseFloat(changeReceived)-parseFloat(itemPrice);
console.log(returnedChange);
document.getElementById("output").innerHTML = `Your change is $${returnedChange}.`;


let dollars = Math.trunc(returnedChange);
document.getElementById("dollars-output").innerHTML = dollars;
returnedChange = Math.round((returnedChange - dollars) * 100) / 100;


let quarters = Math.trunc(returnedChange / .25);
document.getElementById("quarters-output").innerHTML = quarters;
returnedChange = Math.round((returnedChange - (quarters * .25) ) * 100) / 100;
console.log(returnedChange)


let dimes = Math.trunc(returnedChange / .10);
document.getElementById("dimes-output").innerHTML = dimes;
returnedChange = Math.round((returnedChange - (dimes * .10)) * 100) / 100;


let nickels = Math.trunc(returnedChange / .05);
document.getElementById("nickels-output").innerHTML = nickels;
returnedChange = Math.round((returnedChange - (nickels * .05)) * 100) / 100;


let pennies = Math.trunc(returnedChange / .01);
document.getElementById("pennies-output").innerHTML = pennies;
returnedChange = Math.round((returnedChange - (pennies * .01)) * 100) / 100

}