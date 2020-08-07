function circle(duration) {
    const circle = document.querySelector('.pomodoro__circle');
    const circleRadius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * circleRadius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = `${offset}`;
    };
    setProgress()
};


function startTimer() {
    const buttonStart = document.querySelector('.button')
    const timerData = document.querySelector('.pomodoro__data')

    let delay = 60000;

    buttonStart.addEventListener('click', function () {
        buttonStart.style.display = 'none'
        const timeStart = Date.now(); // время когда счётчик запустился (тип number в миллисекундах)
        let resentDelay = 60000
        let x = setInterval(() => {
            let currentDelay = Math.round((delay - (Date.now() - timeStart)) / 1000);

            let minutes = Math.floor(currentDelay / 60)
            if (minutes < 10)
                minutes = '0' + minutes

            let seconds = Math.round((resentDelay - (Date.now() - timeStart)) / 1000);
            if (seconds === 0)
                resentDelay += 60000
            if (seconds < 10)
                seconds = '0' + seconds
            timerData.innerHTML = `${minutes}:${seconds}`
            if (!currentDelay) {
                clearInterval(x)
                timerData.style.display = 'none'
                buttonStart.style.display = 'block'
            }
        }, 1000)
        circle()
    })
}

startTimer()



