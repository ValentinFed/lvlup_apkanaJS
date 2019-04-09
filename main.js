let hours = document.getElementById("main__hours");
let minuts = document.getElementById("main__minuts");
let seconds = document.getElementById("main__seconds");

let date = new Date();

hours.innerText = date.getHours().toString().padStart(2, '0');
minuts.innerText = date.getMinutes().toString().padStart(2, '0');
seconds.innerText = date.getSeconds().toString().padStart(2, '0');