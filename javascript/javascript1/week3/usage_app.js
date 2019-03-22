const activities = [];
const usageLimit = 60;

function addActivity (activity, duration){
    var today = new Date().toJSON().slice(0,10).replace(/-/g,'/'); //return the current date as '2019/03/22'
    activities.push({today, activity, duration})
}

addActivity('Youtube', 30);
addActivity('Facebook', 40);
addActivity('Instragram', 60);



function showStatus(){
    var timeUsed = 0
    if (activities.length === 0) {console.log("Add some activities before calling showStatus")}
    for (var key in activities) {
         timeUsed += activities[key].duration
        }
    if (timeUsed => usageLimit){
        console.log("You have reached your limit, no more smartphoning for you!") 
    }else{
        console.log("You have more time, go ahead play arround!")
    }
    // return "You have added " + activities.length + " activities. They amount to " + totalDur + " min. of usage"
}

showStatus()