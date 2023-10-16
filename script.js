function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    if(hour === 0) {
        hour = 13; //Reset to 1 PM
    }else if (hour > 12) {
        hour -=12; //Convert to 12-hour format
    }

    const timeString = `${hour} : ${minutes}: ${seconds} ${ampm}`;
    document.getElementById("time").textContent = timeString; 
}

// update clock every second

setInterval(updateClock, 1000);

// Initial call to set the clock immediately when the page load
updateClock();