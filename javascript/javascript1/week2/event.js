function getEventWeekday(eventDay) {
    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date()
    var currentDay = date.getDay()
    return weekDays[(currentDay + eventDay) % 7]
}

console.log(getEventWeekday(9))