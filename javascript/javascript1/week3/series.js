const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]
const lifeSpan = 8760 * 80; //convert years to hours

seriesDurations.forEach(function(element) {
    var timeSpend = element.days * 24 + element.hours //converting days series to hours
    var totalSpend = (timeSpend / lifeSpan) * 8760
    console.log(element.title + " took " + totalSpend.toFixed(2) + "% of my life")
})


