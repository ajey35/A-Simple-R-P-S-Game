let userScore=0;
let compScore=0;
const UserScorePara=document.querySelector("#you");
const CompScorePara=document.querySelector("#computer");
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        UserScorePara.innerText=userScore;
        console.log("YOU WON!");
        msg.innerText="You Won!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        CompScorePara.innerText=compScore;
        console.log("COMPUTER WIN!");
        msg.innerText="Computer Win";
        msg.style.backgroundColor="red";

    }
}
const draw=()=>{
    console.log("Game Was Draw");
    msg.innerText="Draw Play Again!";
    msg.style.backgroundColor="#081b31";
}
const GenerateComp=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const PlayGame=(userChoice)=>{
    console.log("User Choice is :",userChoice);
    const comChoice=GenerateComp();
    console.log("Computer Choice is :",comChoice);
    if(userChoice===comChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper"?false:true; 
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissor"?false:true;
        }
        else{
            useWin=comChoice=="rock"?false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id")
         PlayGame(userChoice);
    })
})