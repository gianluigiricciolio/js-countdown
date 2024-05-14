'use strict';


let maxSeconds=11;
let isPressed=false;
const btn=document.querySelector('.start');

btn.addEventListener("click", function(){
    if(!isPressed) startCountDown();
    isPressed=true;
})    



function startCountDown() {
    // SET INTERVAL HA UN IDENTIFICATIVO (COSI COME SET TIMEOUT) CHE POSSIAMO USARE PER STOPPARE QUEL PARTICOLARE EVENTO CON CLEAR INTERVAL (CLOCK)
    const clock = setInterval(countDown,1000);
    setTimeout(stopCountDown,maxSeconds*1000);
}

function countDown() {
    maxSeconds--;
    console.log(maxSeconds);
    
}

function stopCountDown() {
    console.log('Buon anno!');
    // INTERROMPO L INTERVALLO
    clearInterval(clock);
}