let hours = document.getElementById("main__hours");
let minutes = document.getElementById("main__minuts");
let seconds = document.getElementById("main__seconds");

let date = new Date();

hours.innerText = date.getHours().toString().padStart(2, '0');
minutes.innerText = date.getMinutes().toString().padStart(2, '0');
seconds.innerText = date.getSeconds().toString().padStart(2, '0');

// function* hour(start = 0, end = 12, step = 1) {
//     for (let h = start; h <= end; h += step) {
//         if (h < end) {
//             yield h;
//         } else {
//             h = -1;
//         }
//     }
// };

// function* min(start = 0, end = 60, step = 1) {
//     for (let m = start; m <= end; m += step) {
//         if (m < end) {
//             yield m;
//         } else {
//             m = -1;
//             hours.innerText = genHour.next().value.toString().padStart(2, '0');
//         }
//     }
// };

function* sec(start = 0, end = 60, step = 1) {
    for (let s = start; s <= end; s += step) {
        if (s < end) {
            yield s.toString().padStart(2, '0');
        } else {
            s = -1;
            // minutes.innerText = genMin.next().value.toString().padStart(2, '0');
            // console.log(genMin.next().value);
        }
    }
};

// let genHour = hour(date.getHours());
// let genMin = min(date.getMinutes());
let genSec = sec(date.getSeconds());

setInterval(function () {
    seconds.innerText = genSec.next().value;
}, 1000);