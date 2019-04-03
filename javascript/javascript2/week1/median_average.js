const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];


function average (arr) {
    let sum = arr.reduce((previous, current) => current += previous);
    let avg = sum / arr.length;
    return Math.floor(avg);
}

console.log(average(housePrices))


function median (arr) {
    arr.sort((a, b) => a - b);
    return arr[(arr.length - 1) >> 1] + arr[arr.length >> 1] / 2
}

console.log(median(housePrices))