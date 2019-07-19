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

// let timer = setInterval(TimeHandler, 1000);
// let sec = 0;
// let min = 0;
// let hours = 0;

// let start = document.getElementById('start')

// function TimeHandler() {
//     sec ++;

//         if (sec == 60) {
//             sec = 0;
//             min++;
//         }
    
//         if (min == 60) {
//             min == 0;
//             hours++;
//         }
//       DisplayTime();   
//     }


// function DisplayTime() {
//     let timer_element = document.getElementById('timer');
//     timer_element.innerHTML = hours + " : " + min + " : " + sec;
// }

// start.addEventListener('click', TimeHandler);


//let make all the variable .



// var sec = 0;
// var min = 0;
// var hours = 0;
// var timer = setInterval(counting, 1000)
// var start = document.getElementById('start');
// // 


//     function counting() {

//         sec++ ;
      
//         if (sec == 60) {

//             sec = 0 ;
//             min++
//         };

//         if (min == 60) {
//             min = 0;
//             hours++;

//         };
//     };

// start.addEventListener("click", function() {
//     timer = setInterval(counting, 1000);
//     console.log(sec);
//     console.log(min);
// });

// function DisplayTime() {
//         let timer_element = document.getElementById('timer');
//         timer_element.innerHTML = hours + " : " + min + " : " + sec;
//     }



// when we click start the no. should iterate.



// if there is a




var h1 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
 timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}