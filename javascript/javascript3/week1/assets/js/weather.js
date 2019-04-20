
const img = document.getElementById('weather_img');
const c = document.getElementById('celcius');
const city = document.getElementById('city');
const dt = document.getElementById('date');
const input = document.getElementById('search');
const toggle = document.querySelector(".weather")
const initLocation = localStorage.getItem('cityname')

//save the location
function saveLocation(city){
  localStorage.setItem('cityname', city);
}


//retriving the saved location using localStorage
function init () {
  if (initLocation !== null) {
    input.value = initLocation;
    cityWeather(initLocation)
  }
}



function getLocation () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(show);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}


//geting city name from Latitude and Longitude
function show (position) {
	fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBpl7gODF7kBP4eU9SWxB-Szw3yb5VGknE`)
		.then(response => response.json())
		.then((cityName) => {
			input.value = cityName.results[0].address_components[3].long_name
			cityWeather(cityName.results[0].address_components[3].long_name)
			toggle.style.display = "block"
		});
}


//autocomplete
function geolocate () {
	var options = {
		types: ['(cities)'],
		componentRestrictions: {
			country: 'dk'
		}
	};
	autocomplete = new google.maps.places.Autocomplete(input, options);
	google.maps.event.addListener(autocomplete, 'place_changed', function () {
		cityWeather(input.value)
	});
}


//getting the weather by city name
function cityWeather (name) {
	toggle.style.display = "block"
	fetch(encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${name},dk&units=metric&&APPID=81f3ef7d95d1a55e0f0754132ccc7984`)) //using encodeURI for danish letters
		.then(response => response.json())
		.then((weatherMap) => {
			img.src = `http://openweathermap.org/img/w/${weatherMap.weather[0].icon}.png`;
			c.innerHTML = `${Math.round(weatherMap.main.temp)} °C`;
			city.innerHTML = name;
			dt.innerHTML = todayDate();
      saveLocation(name)
		});
}

//getting date in formated way ex: Tuesday, April 18
function todayDate() {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	][new Date().getMonth()]
	var today = new Date().getDate();
	return `${days}, ${monthNames} ${today}`
}


//event listener for getting location image.
document.querySelector('.loc').addEventListener('click', getLocation)
