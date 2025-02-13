function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Har 1 soniyada yangilash
setInterval(updateClock, 1000);
updateClock();
