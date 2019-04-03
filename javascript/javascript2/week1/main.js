const books = [{
    id: 1,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    img: './assets/img/richdad.jpg',
    lang: 'English'
},
{
    id: 2,
    title: 'Master The Game',
    author: 'Tony Robbins',
    img: './assets/img/masterthegame.jpg',
    lang: 'English'
},
{
    id: 3,
    title: 'Starts With Why',
    author: 'Simon Sinek',
    img: './assets/img/startwhy.png',
    lang: 'English'
},
{
    id: 4,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    img: './assets/img/grow.jpg',
    lang: 'English'
},
{
    id: 5,
    title: 'War And Peace',
    author: 'Leo Tolstoy',
    img: './assets/img/war.jpg',
    lang: 'English'
},
{
    id: 6,
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    img: './assets/img/habit.jpg',
    lang: 'English'


}
]


function addBook(image, title, author, lang) {

var main = document.querySelector('#library');

var div = document.createElement('div'); //div
div.className = 'books';
main.appendChild(div)


var img = document.createElement("img") //image
img.setAttribute("src", image);
div.appendChild(img)

var h1 = document.createElement("h1") //title
h1.textContent = title
div.appendChild(h1)

var p = document.createElement("p") //author
p.className = "auth"
p.textContent = author
div.appendChild(p)

var p1 = document.createElement("p") //language
p1.textContent = lang
div.appendChild(p1)
}


function toDom() {
for (i = 0; i < books.length; i++) {
    console.log(books[i].img)
    addBook(books[i].img, books[i].title, books[i].author, books[i].lang) //image / title / author / language
}
}


toDom(); //execute the book generator


//Spirit animal name generator
const spiritNames = ['Harro',
'Azur',
'Brath',
'The Slender Blacksmith',
'The Sleeping Teacher',
'The Thin Teenager',
'The Ivory Groom',
'The Weeping Nightwatch'
]


function randomName() {
var randomnr = Math.floor(Math.random() * 8);
var name = document.getElementById("name").value;
var h1 = document.getElementById('output')
h1.textContent = name + ' ' + spiritNames[randomnr]


}

document.getElementById('generate').addEventListener('click', randomName);