const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let screenValue = "";

for (const item of buttons) {
    item.addEventListener("click", (e) => {
        const buttonText = e.target.innerText;

        switch (buttonText) {
            case "x":
                screenValue += "*";
                break;
            case "RESET":
                screenValue = "";
                break;
            case "DEL":
                screenValue = screenValue.slice(0, -1);
                break;
            case "=":
                try {
                    screenValue = eval(screenValue).toString();
                } catch (error) {
                    screenValue = "Error";
                }
                break;
            default:
                screenValue += buttonText;
                break;
        }

        screen.value = screenValue;
    });
}
