function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Joriy vaqtni olish
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Agar soat yoki daqiqa yoki soniya 10dan kichik bo'lsa, oldiga 0 qo'shish
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Soatni ekranga chiqarish
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Har 1 soniyada soatni yangilab borish
setInterval(updateClock, 1000);

// Dastlabki birinchi vaqti ko'rsatish
updateClock();
