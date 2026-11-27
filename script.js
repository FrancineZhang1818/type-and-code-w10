console.log("hello world!");

const tester = document.getElementById("tester");

function changeLetter(letter) {
    tester.textContent = letter;
}

let currentSize = 200;

function changeFontSize(delta) {
    currentSize = currentSize + delta;

    if (currentSize < 5) {
        currentSize = 5;
    }

    tester.style.fontSize = `${currentSize}px`;

    console.log(currentSize);
}

function changeColor(color) {
    tester.style.color = color;
    console.log(color);
}