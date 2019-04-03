function getShortWord (list) {
    return list.reduce(function (a, b ) {
        return a.length <= b.length ? a : b; 
      })
}

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

console.log(getShortWord(danishWords)) // returns 'ø'
