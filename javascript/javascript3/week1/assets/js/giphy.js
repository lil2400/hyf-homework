const input = document.getElementById('search')
const button = document.getElementsByTagName('button')


function searchGif(keyword) {
	fetch(encodeURI(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=N3r0KF4bhM5tbBUoASgTcKPMHfCngjZI&limit=5`))
		.then(response => response.json())
		.then((json) => {
			for (let i = 0; i < 5; i++) {
				createGif(json.data[i].images.fixed_width.url)
			}
		});
}

function createGif(link) {
	let newDiv = document.createElement('div')
	newDiv.setAttribute('class', 'wrap');
	let img = document.createElement('img')
	img.src = link;
	newDiv.appendChild(img);
	let container = document.querySelector('.container')
	container.appendChild(newDiv)
}

document.getElementById("btn").addEventListener("click", function () {
	searchGif(input.value)
});

//when Enter is pressed inside input, function will execute
input.addEventListener("keyup", function (event) {
	if (event.keyCode === 13 && input.value != "") {
		event.preventDefault();
		searchGif(input.value)
	}
});
