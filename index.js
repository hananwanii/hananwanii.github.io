let [milsec,sec,min,hr] = [0,0,0,0];
let timerRef = document.querySelector('.timer');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milsec,sec,min,hr] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
});
function displayTimer(){
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
    let hour = hr < 10 ? "0" + hr : hr;
    let minutes = min < 10 ? "0" + min : min;
    let seconds = sec < 10 ? "0" + sec : sec;
    let milliseconds = milsec < 10 ? "00" + milsec : milsec < 100 ? "0" + milsec : milsec;
    timerRef.innerHTML = ` ${hour} : ${minutes} : ${seconds} : ${milliseconds}`;
   }