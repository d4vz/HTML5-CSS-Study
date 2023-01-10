const time = document.getElementById('time');
const start = document.getElementsByClassName('start');
const stop = document.getElementsByClassName('stop');
const reset = document.getElementsByClassName('reset');


var milli = 0;
var sec = 0;
var min = 0;

startTimer = () => {
    milli++;
    if (milli == 100) {
        milli = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    time.innerHTML = min + ":" + sec + ":" + milli;
}

start[0].addEventListener('click', () => {
    myInterval = setInterval(startTimer, 1);
});

stop[0].addEventListener('click', () => {
    clearInterval(myInterval);
});

reset[0].addEventListener('click', () => {
    clearInterval(myInterval);
    time.innerHTML = "0:0:0";
    milli = 0;
    sec = 0;
    min = 0;
});



