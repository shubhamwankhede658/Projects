let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn")
let msgcontainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn= document.querySelector("#new-btn")
let turnO= true;
let count=0;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
     turnO=true; 
     count=0;
     enableboxes();
     msgcontainer.classList.add("hide");
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
     }
 }
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(val)=>{
    msg.innerText=`congratulation winner is ${val}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showWinner(val1);
                return true;
            }
        }
    }
}
const gamedraw=()=>{
     msg.innerText="game is draw";
     msgcontainer.classList.remove("hide");
     disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            turnO=false;
            box.innerText="O";
        }else{
            turnO=true;
            box.innerText="X";
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();

        if(count ==9 && !isWinner){
            gamedraw();
        }
    })
})







//
// let boxes= document.querySelectorAll(".box");
// let resetBtn=document.querySelector("#reset-btn");
// let newGameBtn=document.querySelector("#new-btn");
// let msgContainer=document.querySelector(".msg-container");
// let msg=document.querySelector("#msg");



// let turnO = true//playerx,o
// let count=0; // to track draw



// const winPatterns=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ];
// const resetGame=()=>{
//     turnO=true; 
//     count=0;
//     enableboxes();
//     msgContainer.classList.add("hide");
// }
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
       
//         if(turnO){
//             box.innerText="O";
//             turnO=false;
//         }else{
//             box.innerText="X";
//             turnO=true;
//         }
//         box.disabled=true;
//         count++;
//         let isWinner=checkWinner();
        

//         if(count==9 && !isWinner){
//             gamedraw();
//         }
//     });
// });

// const disableboxes=()=>{
//     for(box of boxes){
//         box.disabled=true;
//     }
// }
// const enableboxes=()=>{
//     for(box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }
// const showWinner=(winner)=>{
//     msg.innerText=`congratulations, winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableboxes();
// }
// const gamedraw=()=>{
//     msg.innerText="game is draw";
//     msgContainer.classList.remove("hide");
//     disableboxes();
// }
// const checkWinner=()=>{
//     for(let pattern of winPatterns){
//         let pos1Val= boxes[pattern[0]].innerText; 
//         let pos2Val= boxes[pattern[1]].innerText; 
//         let pos3Val= boxes[pattern[2]].innerText;  

//         if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
//             if(pos1Val==pos2Val && pos2Val==pos3Val){
               
//                 showWinner(pos1Val);
//                 return true;
//             }
//         }
//     }
// }

// newGameBtn.addEventListener("click",()=>{
//     resetGame();
// })

// resetBtn.addEventListener("click",()=>{
//     resetGame();
// })