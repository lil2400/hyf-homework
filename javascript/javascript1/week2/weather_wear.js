function whatToWear(celcius) {
    if (celcius <= 0) {
        return "You better stay home!"
    } else if (celcius < 10) {
        return "Still cold! Get some jacked and a hat"
    } else if (celcius < 20) {
        return ("A jacket without a hat")
    } else if (celcius => 20) {
        return ("A shirt and sandals")
    }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear)