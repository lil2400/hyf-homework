const candyPrices = 
{"Sweet": 0.5,
"Chocolate": 0.7,
"Toffee": 1.1,
"Gum": 0.03};

const boughtCandyPrices = []

function addCandy(candyType, weight){
    boughtCandyPrices.push(candyPrices[candyType] * weight)
}

addCandy("Sweet",20)
addCandy("Chocolate",15)
addCandy("Toffee",10)
addCandy("Gum",30)



//Can i buy more?
function canBuyMoreCandy(){
    var currentAmount = 0;
    var i = 0;
    while (i < boughtCandyPrices.length){
        currentAmount += boughtCandyPrices[i]
        i++
    }
    console.log(currentAmount)
    if (amountToSpend > currentAmount) {
        console.log("You can buy more, so please do!")
        return true
    }else{
        console.log("Enough candy for you!")
        return false
    }
       
}


canBuyMoreCandy();
