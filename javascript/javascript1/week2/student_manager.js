const class07Students = ["Peter","Christina","Paul","Mette","Erik","James"];
function addStudentToClass(studentName) {
    if (studentName === "") {console.log("Empty student name is not allowed"); return}
    if(!class07Students.includes(studentName)){
            if(getNumberOfStudents() === 6 && !(studentName === "Margrethe")){ //if limit reached and the name is not Margrethee
                console.log("Cannot add more students to class 07")
            } else { 
                class07Students.push(studentName)
            }
    }else{
        console.log("Student " + studentName + " is already in the class")
    }

}

function getNumberOfStudents() {
    return class07Students.length
}

addStudentToClass("Jakob")
console.log(getNumberOfStudents())