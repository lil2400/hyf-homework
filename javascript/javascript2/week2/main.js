let a = 0;
let timer = null;




function sleep (delay, stringToLog) {
    change(delay)
    timer = setInterval(function(){ 
        if (!delay <= 0){
            change(delay -=1)
            console.log(delay)
        } else {
            change(stringToLog)
            clearInterval(timer);
        }
     }, 1000);

}

function change (txt) {
    document.getElementById('log').innerHTML = txt
}


//document.getElementById('delay_btn').addEventListener('click',countdown(5))
document.getElementById("delay_btn").addEventListener("click", function(){
    var txt = prompt("Please enter some text", "Hello World");

    sleep(5,txt)
  });


  let earth = function() { console.log('Earth'); }
  let saturn = function() { console.log ('Saturn'); }

  function planets (planetLogFunction) {
    planetLogFunction()
  }

  planets(earth)



function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);

}


  function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBpl7gODF7kBP4eU9SWxB-Szw3yb5VGknE";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }


  document.getElementById("location_btn").addEventListener("click", function(){
    getLocation();

  });


  function game() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;
    
    open('./game.html', 'Fastest Game', params);
  }

  document.getElementById("game").addEventListener("click", function(){
    game();

  });
