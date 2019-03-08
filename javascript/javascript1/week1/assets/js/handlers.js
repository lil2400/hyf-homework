/*
Homework for HYF class 09
-Homework Week 1.
--Calculations
*/

var button1 = document.querySelector('#sub_age');

//Handlers
button1.addEventListener('click', function() {
    future_year();
});
document.getElementById("sub_dog").addEventListener("click", function(event){
    event.preventDefault();
   dog_life();
});

document.getElementById("sub_hus").addEventListener("click", function(event){
    event.preventDefault();
   house_price();
});
document.getElementById("sub_name").addEventListener("click", function(event){
    event.preventDefault();
   bus_name();
});
