let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset-btn");
let message = document.querySelector("#msg");
let messageContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn")

let turn0 = true; //turnX turn0

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    let turn0 = true;
    enableBoxes();
    messageContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    message.innerText = `Congratulations! The Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
newbtn.addEventListener("click", resetGame);
resbtn.addEventListener("click", resetGame);