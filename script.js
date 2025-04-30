const bulb1 = document.getElementById("lightbulb1");
const bulb2 = document.getElementById("lightbulb2");
const bulb3 = document.getElementById("lightbulb3");
const counter = document.querySelector(".subtitle");
let count = 0;


bulb1.addEventListener('click', function() {
    count++;
    counter.innerHTML = `You've click the lights ${count} times`
    bulb1.classList.toggle("active")
})

bulb2.addEventListener('click', function() {
    count++;
    counter.innerHTML = `You've click the lights ${count} times`
    bulb2.classList.toggle("active")
})

bulb3.addEventListener('click', function() {
    count++;
    counter.innerHTML = `You've click the lights ${count} times`
    bulb3.classList.toggle("active")
})