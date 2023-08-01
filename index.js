let count = 0;

const countDisplay = document.querySelector("#count");

function increment() {
    countDisplay.innerHTML = ++count;
}

function resetCount() {
    count = 0;
    countDisplay.innerHTML = count;
}
