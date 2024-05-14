'use strict';


let maxSeconds=10;

function countdown() {
    if(maxSeconds===0){
        console.log('Buon anno!');
        // INTERROMPO L INTERVALLO
        clearInterval(clock);
    }
    else{
        console.log(maxSeconds);
        maxSeconds--;
    }
}

// SET INTERVAL HA UN IDENTIFICATIVO (COSI COME SET TIMEOUT) CHE POSSIAMO USARE PER STOPPARE QUEL PARTICOLARE EVENTO CON CLEAR INTERVAL (CLOCK)
const clock = setInterval(countdown,1000);