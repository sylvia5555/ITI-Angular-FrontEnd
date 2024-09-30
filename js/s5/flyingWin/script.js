const flyingWindow = document.getElementById('flying-window');
const stopButton = document.getElementById('stop-btn');
let interval;

function moveWindow() {
    const maxX = window.innerWidth - flyingWindow.offsetWidth;
    const maxY = window.innerHeight - flyingWindow.offsetHeight;

    // console.log(window.innerWidth)
    // console.log(maxY)


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    flyingWindow.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function startFlying() {
    interval = setInterval(moveWindow, 1000); 
}

function stopFlying() {
    clearInterval(interval);
}

startFlying();

stopButton.addEventListener('click', stopFlying);
stopButton.addEventListener('dblclick', startFlying);
