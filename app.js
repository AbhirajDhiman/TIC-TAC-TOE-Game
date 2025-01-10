let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbutton");
let newgamebtn=document.querySelector(".newbutton");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg")
// to track turn whose turn is it X or O
// player X or player O
let turnO=true;
let clickcount=0;

const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const ResetGame= () => {
    turnO=true;
    Enable();
    msgcontainer.classList.add("hide")
    clickcount=0;

}



boxes.forEach((box) => {
    box.addEventListener("click",() => {

        if(box.innerText === ""){ // Only update if the box is empty
            if(turnO) { // player O's turn
                box.innerText ="O";
                box.style.color="blue";
                turnO = false;
            } else{ // player X's turn
                box.innerText="X";
                box.style.color="red";
                turnO=true;
            }
        }
        box.disabled=true;
        clickcount++;
        Checkwinner();
    });
});
const DisableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const Enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= ""; 


    }
}

const showWinner=(winner) =>{
    if(winner){
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msg.style.color="black";
    }else{
        msg.innerText="DRAW"
        msg.style.color="black";
    }
    msgcontainer.classList.remove("hide")
    DisableBtns();
}
const Checkwinner = () => {
    for(let pattern of WinPattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val != "" && pos3val!= ""){
            if(pos1val===pos2val && pos2val===pos3val){

                showWinner(pos1val);
                return
            }
        }
    }
    if (clickcount===9){
        showWinner(null);
    }
};

const resetgame=() => {
    ResetGame();
}



resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", () => {
    ResetGame();
});
