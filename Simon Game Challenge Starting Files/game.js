
let buttonColors=["red","blue","green","yellow"];

let userClickedPattern=[];
let gamePattern=[];

$(".btn").click((evt)=>{
    let userChoseColor= $(evt.target).attr("id");
    userClickedPattern.push(userChoseColor);
   
    makeSound(userChoseColor);
    animatePress(userChoseColor);

    checkAnswer(userClickedPattern.length-1);
})
let started=false;
$(document).keydown((evt)=>{
    if(!started){
        nextSequence();
        level = 0;              // ✔ add this
        $("h1").text("Level " + level);
        started=true;
    }
    
    
})

function animatePress(currentColor){
   let location=$(`#${currentColor}`);
   location.addClass("pressed");

   setTimeout(()=>{
    location.removeClass("pressed");
   },100);

}


let level=0;
function nextSequence(){
    userClickedPattern=[];
    let randomNumber= Math.floor(Math.random()*4);
    let randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    let colorid=`#${randomChosenColor}`;
    $(colorid).fadeIn(100).fadeOut(100).fadeIn(100);
    
    makeSound(randomChosenColor);

    
    level++
    $("h1").text("level "+level);
    
}


function makeSound(name){
    let audio= new Audio("./sounds/"+name+".mp3");
    audio.play();
}


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        console.log("success");
        if(gamePattern.length== userClickedPattern.length){
            setTimeout(()=>{
                nextSequence();
              
            },1000);  
        }
    }else{
        console.log("wrong");
        makeSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over")
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },100);
        startOver();
    }
    console.log(userClickedPattern);
    console.log(gamePattern);
}

function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;

    $("h1").text("Press A Key to Start");
}