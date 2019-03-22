const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
const myPlaylist = [];

///-------------ADD SONG TO DATABASE-------------

function addSongToDatabase (song){
    songDatabase.push(song)
    //Well, even if we don't don't add return, still it is going to return by it's nature, always does return but as 'undefined'
    //but in this case I beilived we don't need a return because we're using the function to
    //add an array not getting anything in return
}
var song = {
    songId: songDatabase.length +1,
    title: 'Wake Me Up',
    artist: 'Avicii',
  }
addSongToDatabase(song)

///-------------END OF SONG TO DATABASE-----------




///-------------GET SONGS BY TITLE-------------
function getSongByTitle (title) {
    for (var key in songDatabase) {
        if (songDatabase[key].title === title){
            return(songDatabase[key])
        }
     }

}
const searchedSong = getSongByTitle('Wake Me Up');
console.log(searchedSong); // returns { songId: 5, title: 'Wake Me Up', artist: 'Avicii' }
//-------------END OF SONG BY TITLE------------



//-------------ADD TO MY PLAYLIST-------------
function addSongToMyPlaylist (title){
    myPlaylist.push(getSongByTitle(title))
}

addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist); 
//-------------END OF ADD TO MY PLAYLIST-------
