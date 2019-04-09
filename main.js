let hours = document.getElementById("main__hours");
let minutes = document.getElementById("main__minuts");
let seconds = document.getElementById("main__seconds");

let date = new Date();

hours.innerText = date.getHours().toString().padStart(2, '0');
minutes.innerText = date.getMinutes().toString().padStart(2, '0');
seconds.innerText = date.getSeconds().toString().padStart(2, '0');


function* sec(start = 0, end = 60, step = 1) {
    for (let s = start; s <= end; s += step) {
        if (s < end) {
            yield s.toString().padStart(2, '0')
        } else {
            s = -1;
        }
    }
};

let gen = sec(date.getSeconds());

setInterval(function () {
    seconds.innerText = gen.next().value;
}, 1000);