const fetch = require('node-fetch');

function getBtcPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then((btc) => {
            console.log(`Current Bitcoin price ${btc.bpi.EUR.rate} Euro`)
    });
}

getBtcPrice();