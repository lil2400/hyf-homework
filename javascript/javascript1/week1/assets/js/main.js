/*
Homework for HYF class 09
-Homework Week 1.
--Calculations
*/


function future_year() {
    var yearOfBirth = document.getElementById("birth_year").value;
    var yearFuture = document.getElementById("future_year").value;
    var futureYear = yearOfBirth - yearFuture;
    addText("You will be " + Math.abs(futureYear) + " years old in " + yearFuture)
}

function dog_life() {
    var dogYearOfBirth = document.getElementById("dog_birth_year").value;
    var dogYearFuture = document.getElementById("dog_future_year").value;
    var dogYear = null;
    var shouldShowResultInDogYears = document.getElementById("show_dog_year");
    dogYear = dogYearFuture - dogYearOfBirth;
    humanYear = dogYear * 15;

    if (shouldShowResultInDogYears.checked == true) {
        addText("Your dog will be " + dogYear + " years old in " + dogYearFuture)
    } else {
        addText("Your dog will be " + humanYear + " human years old in " + dogYearFuture)
    }
}


/*
Disclamer:

The formula on HYF kinda did not make any sense or maybe just for me,
because there wasn't a price set, neither a price for square metters.
Therefore I did make a variable for price per m2.
 */
function house_price() {
    var pricePerM2 = document.getElementById("hus_price_perm2").value; //A price per meter square
    var width = document.getElementById("hus_width").value; //Width of the area in meters
    var length = document.getElementById("hus_length").value; //Length of the area in meters
    gardenSizeInM2 = document.getElementById("hus_garden").value; //Garden size in meter square
    var housePrice = width * length + gardenSizeInM2; //Converting width and length to meter square
    housePrice = housePrice * pricePerM2; //Calculate area size to m2 price
    var total = Math.floor(housePrice / 10).toLocaleString(); //formating the numbers to show ,
    addText("Price for the house estimated to be " + total + " DKK")
}

function bus_name() {
    var startupName;
    const randomNumber = Math.floor(Math.random() * 5) + 0
    var firstWords = ["Events",
        "Imagine",
        "Awesome",
        "Tesla",
        "Benchmark",
        "Tales"
    ];
    var secondWords = ["Corp",
        "Now",
        "Monitor",
        "Nature",
        "Bazarr",
        "Bus"
    ];
    startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
    addText('The startup: "' + startupName + '" contains ' + startupName.length + ' characters')


}
function addText(tekst) {
    var obj = document.getElementById("console_")
    var txt = document.createTextNode("> " + tekst + '\n')
    obj.appendChild(txt)
}

addText("Welcome, here you will see your results")