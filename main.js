function circle(duration) {
   const circle = document.querySelector('.pomodoro__circle');
   const circleRadius = circle.r.baseVal.value;
   const circumference = 2 * Math.PI * circleRadius;

   circle.style.strokeDasharray = `${circumference} ${circumference}`;
   circle.style.strokeDashoffset = circumference;

   function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
   };
   setProgress()
};


function startTimer() {
   const buttonStart = document.querySelector('.button')
   const timerData = document.querySelector('.pomodoro__data')

   const delay = 1500000; // 25 мин таймера, статичное и не меняется
   let resentDelay = 6000; // начальное время остаточного времени счётчика и постоянно уменьшается:

   buttonStart.addEventListener('click', function () {
      circle()
      buttonStart.style.display = 'none'

      const timeStart = Date.now(); // время когда счётчик запустился (тип number в миллисекундах)

      let x = setInterval(() => {
         const currentDelay = Math.round((resentDelay - (Date.now() - timeStart)) / 1000);
         
         timerData.innerHTML = `:${currentDelay}`

         if (currentDelay < 0) {
            clearInterval(x);
         }
      }, 1000)

   })
}

startTimer()



