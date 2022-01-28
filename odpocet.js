const finaleDate = new Date("September 23, 2022 00:00:00").getTime();

function timer (){
    const now = new Date().getTime();
    var diff = finaleDate - now;
    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    var minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
    var seconds = Math.floor(diff % (1000*60) / 1000);

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;



}
timer();
setInterval(timer,1000);