/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function displayTime() {
    const now = new Date();

    // 24-hour format
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // 12-hour format with AM/PM
    let hours12 = now.getHours() % 12 || 12;
    let ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    hours12 = hours12.toString().padStart(2, '0');

    console.clear(); // Clears console for real-time effect
    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);
}

// Update the clock every second
setInterval(displayTime, 1000);
