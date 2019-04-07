
let s = 1;
let l = 1;
const button = document.getElementById('play')
const s_score = document.querySelector('#s-counter')
const l_score = document.querySelector('#l-counter')





function start (delay) {
    window.addEventListener('keypress', function (e) {
        if (e.keyCode == 115) { //S
            s_score.textContent = s++
        }else if (e.keyCode == 108) { //L
            l_score.textContent = l++
        } 
        
    }, false);

    console.log('started')
    setTimeout(function(){
        check()
    }, delay * 1000);
}


function check () {
    if (s > l) {
        congrats('s')
    }else{
        congrats('l')
    }
}

button.addEventListener('click',function(){
    let input = document.querySelector('input').value
    start(input)
})

function congrats(who){
    var confettiSettings = { target: `${who}` };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}


