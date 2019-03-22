notes = [];

function addNote (id, content){
    notes.push({id,content})
}
addNote(1, "kotek palidhje send")



function getNoteFromId (id){
    for (var key in notes) {
        if (notes[key].id === id){
            return notes[key].content
        }else{
            return "Wrong id"
        }
    }
}
console.log(getNoteFromId(2))


function logOutNotesFormatted() {
    for (var key in notes) {
        console.log("The note with id: " + notes[key].id + ", has the following note text: " + notes[key].content)
    }
}

logOutNotesFormatted();