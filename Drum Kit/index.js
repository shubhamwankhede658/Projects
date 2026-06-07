let allButton = document.querySelectorAll(".drum");

allButton.forEach((button)=>{
    button.addEventListener("click",(evt)=>{
        let buttonInnerHTML=evt.target.innerText;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
})

function makesound(key){
            switch(key){
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;
 
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "l":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

            default : console.log(buttonInnerHTML);
        }
}

document.addEventListener("keydown",(evt)=>{
    let keystroke=evt.key;
    makesound(keystroke);
    buttonAnimation(keystroke);
})

function buttonAnimation(currentkey){
   let activeBtn= document.querySelector("."+currentkey);
   activeBtn.classList.add("pressed");
   setTimeout(()=>{
    activeBtn.classList.remove("pressed");
   },100);
}