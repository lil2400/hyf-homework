const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersToRemove = parseInt(Math.random() * 11);

for( var i = 0; i < numbersArray.length; i++){ 
    if ( numbersArray[i] === numbersToRemove) {
        numbersArray.splice(i, 1); 
    }
 }
 console.log("Removed number: " + numbersToRemove)