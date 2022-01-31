let screen = document.getElementById("screen");
let buttons = Array.from(document.querySelectorAll(".btn"))

let text = "Click to Type"
let screenValue = text;
screen.innerText = screenValue;

buttons.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        if (screen.innerText != "" && screen.innerText == text) {
            screenValue = ""
            screen.innerText = screenValue;
        }

        let buttonText = e.target.id;

        if (buttonText == 'C') {
            screenValue = text;
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            screen.innerText = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    })
})