let [milsec,sec,min,hr] = [0,0,0,0];
let timerRef = document.querySelector('.timer');
let a = null;


//For start Button
document.getElementById('start').addEventListener('click', ()=>{
    if(a!==null){
        clearInterval(a);
    }
    a = setInterval(timer,10);
});


//For Stop Button
document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(a);
});


//For reset Button
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(a);
    [milsec,sec,min,hr] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});


// Function for Executing the timer
function timer(){
    milsec+=10;
    if(milsec == 1000){
        milsec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
            if(min == 60){
                min = 0;
                hr++;
            }
        }
    }

    
    //Here in the millisecond cell, I added a little extra code. Because milliseconds are four numbers, two conditions have to be added here. When the value of milliseconds is less than 10, two 0s will be added. When its value is less than 100, a 0 will be added.
    let hour = hr < 10 ? "0" + hr : hr;
    let minutes = min < 10 ? "0" + min : min;
    let seconds = sec < 10 ? "0" + sec : sec;
    let milliseconds = milsec < 10 ? "00" + milsec : milsec < 100 ? "0" + milsec : milsec;
    timerRef.innerHTML = ` ${hour} : ${minutes} : ${seconds} : ${milliseconds}`;
   }