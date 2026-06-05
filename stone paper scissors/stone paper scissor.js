let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice; ->modular;
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);

    if(userChoice===compChoice){
        //draw game;
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors ,paper
            userWin=compChoice==="paper"? false :true;
        }else if(userChoice==="paper"){
            //rock, scissor;
            userWin=compChoice==="scissors" ? false : true;
        }else{//userchoice=scissor 
            //rock ,paper
            userWin=compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    } 
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})