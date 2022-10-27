const mainGame = document.getElementById('main-game')
const current = document.getElementById('current')

let hex = "";
for (let i = 1; i < 80; i++) {
    if (i >= 11 && i <= 20 || i >= 31 && i <= 40 || i >= 51 && i <= 60 || i >= 71 && i <= 80) {
        hex += hexagon("white", "black", "transform: translate(22px, 0px) rotate(30deg); margin: -8px !important;")
    } else {
        hex += hexagon("white", "black", "transform: rotate(30deg); margin: -8px !important;")
    }

    if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || i == 60 || i == 70 || i == 80) {
        hex += `
            <br />
        `;
    }
}

mainGame.innerHTML = hex;
current.innerHTML = hexagon("white", "skyblue", "transform: rotate(30deg)")

function hexagon(stroke, fill, style = "") {
    return `
        <svg
            width="50"
            height="50"
            style="${style}"
            viewBox="0 0 290 247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M1.5 125L72 1H215L288.5 125L215 246H72L1.5 125Z"
            stroke="${stroke}"
            fill="${fill}"
            />
        </svg>
    `
}