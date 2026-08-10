const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');

const timer = document.getElementById('timer');

let timeLeft = 60;
let time = true;

let timerId = null;

start.disabled = false;
pause.disabled = true;
stop.disabled = true;

function startTimer() {

    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;

    timerId = setInterval(() => {
        timeLeft--;
        if (timeLeft<=15){
        timer.style.color = "red";
        timer.style.backgroundColor = "white";
        timer.style.border = "5px solid grey";
        timer.style.borderRadius = "8px";
        }
        if (timeLeft<=0)
        {
            timer.textContent = "00:00";
            clearInterval(timerId);
            alert("Take a short break!");
        }
        else if (timeLeft>9){
            timer.textContent = "00:" + timeLeft;
        }
        else
        {
            timer.textContent = "00:0" + timeLeft;
        }
        }, 1000);
    }

    function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 60;
    isPaused = false;
    pause.textContent = "Pause";
    timer.textContent = "01:00";
    timer.style = "";

    start.disabled = false;
    pause.disabled = true;
    stop.disabled = true;
    }

    start.addEventListener('click', startTimer);

    stop.addEventListener('click',resetTimer);

    let isPaused = false;

    pause.addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(timerId);
        isPaused = true;
        pause.textContent = "Resume";
    } else {
        isPaused = false;
        pause.textContent = "Pause";
        startTimer(); 
    }
});