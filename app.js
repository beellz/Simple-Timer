// let timer;
// let sec = 0;
// let min = 0;
// let hours = 0;


// let start_btn = document.getElementById("start");
// let reset_btn = document.getElementById("reset");
// let stop_btn = document.getElementById("stop");

// start_btn.addEventListener("click", function() {
//     timer = setInterval(TimeHandler, 1000);
//     // reset_btn.disabled = true;
//     // console.log(setInterval 1000;);
//     // setInterval (console1000;
//     let x = cosnole.log("hello");
//     setInterval (x , 1000);
// });

// function TimeHandler () {
//     sec ++;

//     if (sec == 60) {
//         sec = 0;
//         min++;
//     }

//     if (min == 60) {
//         min == 0;
//         hours++;
//     }
    
// }

let timer = setInterval(TimeHandler, 1000);
let sec = 0;
let min = 0;
let hours = 0;

function TimeHandler() {
    sec ++;

        if (sec == 60) {
            sec = 0;
            min++;
        }
    
        if (min == 60) {
            min == 0;
            hours++;
        }
      DisplayTime();   
    }


function DisplayTime () {
    let timer_element = document.getElementById("timer");
    timer_element.innerHTML = hours + " : " + min + " : " + sec;
}