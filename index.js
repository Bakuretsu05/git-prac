let count = 0;

const countDisplay = document.querySelector("#count");

function increment() {
    countDisplay.innerHTML = ++count;
}

function decrement() {
    countDisplay.innerHTML = --count;
}
