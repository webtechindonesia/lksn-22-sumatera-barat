const mainGame = document.getElementById('main-game')
const current = document.getElementById('current')
const player1Name = document.getElementById('player1Name')
const player1Score = document.getElementById('player1Score')
const player2Name = document.getElementById('player2Name')
const player2Score = document.getElementById('player2Score')

let playerActive = 1;

let player = {
    1: { name: "Firman", score: 52 },
    2: { name: "Budi", score: 66 },
}

player1Name.innerHTML = player[1].name;
player2Name.innerHTML = player[2].name;

player1Score.innerHTML = player[1].score;
player2Score.innerHTML = player[2].score;

const changePlayer = (p) => {
    if (p == 1) {
        playerActive = 2
    } else {
        playerActive = 1
    }
}

const changeCurrentNumber = (number) => {
    changePlayer(playerActive)
    current.innerHTML = hexagon("white", playerActive == 1 ? "skyblue" : "pink", "transform: rotate(30deg)", number)
}


let hex = "";
for (let i = 1; i < 80; i++) {
    if (i >= 11 && i <= 20 || i >= 31 && i <= 40 || i >= 51 && i <= 60 || i >= 71 && i <= 80) {
        hex += hexagon("white", "black", "cursor: pointer; transform: translate(22px, 0px) rotate(30deg); margin: -8px !important;", Math.floor(Math.random() * 20) + 1)
    } else {
        hex += hexagon("white", "black", "cursor: pointer; transform: rotate(30deg); margin: -8px !important;", Math.floor(Math.random() * 20) + 1)
    }

    if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || i == 60 || i == 70 || i == 80) {
        hex += `
            <br />
        `;
    }
}

mainGame.innerHTML = hex;

current.innerHTML = hexagon("white", playerActive == 1 ? "skyblue" : "pink", "transform: rotate(30deg)", 0)

function hexagon(stroke, fill, style = "", number) {

    let cls = ""

    if (playerActive == 1) {
        cls = "hover-pink"
    } else if (playerActive == 2) {
        cls = "hover-blue"
    }

    return `
        <svg
            width="50"
            height="50"
            class="svg ${cls}"
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
            <text font-size="36"
                class="hover-white"
                fill="none"
                style="transform: translate(120px, 120px) rotate(-25deg);"
                    font-family="Verdana"
                    text-anchor="middle"
                    alignment-baseline="baseline"
                    x="22"
                    y="34.4">
                    ${number}
                </text>
        </svg>
    `
}


var hexAll = document.querySelectorAll('path');
hexAll.forEach(el => {
    el.addEventListener('click', (e) => {
        changeCurrentNumber(e.target.parentNode.childNodes[3].innerHTML);
        if (playerActive == 1) {
            e.target.parentNode.classList.add('fill-blue');
        } else {
            e.target.parentNode.classList.add('fill-pink');
        }
    });
});