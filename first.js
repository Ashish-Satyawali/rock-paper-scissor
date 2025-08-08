let choices = document.querySelectorAll(".gaming");
let para = document.querySelector("#direction");
let parabox = document.querySelector("#directionbox");
let score1=document.querySelector("#score1");
let score2=document.querySelector("#score2");
let player_1;
let comp;


choices.forEach((val)=>{
    val.addEventListener("click",()=>{
        player_1=val;
        comp = comp_choices();
        console.log(comp);
        chkwinner(player_1,comp);
    })

})
function comp_choices(){
    let rdmno = Math.floor(Math.random()*3);
    return choices[rdmno] ;
}
function chkwinner(player_1,comp){
    if(player_1==comp){
        para.innerText="It was a draw";
        parabox.style.backgroundColor="rgb(1, 1, 49)";
    }
    else if(player_1==choices[0] && comp!=choices[0]){
        if(comp==choices[1]){
            para.innerText="You Lost , Paper beats Rock";
            parabox.style.backgroundColor="red";
            score2.innerText++;
        }
        else{
            para.innerText="You Won , Rock beats Scissor";
            parabox.style.backgroundColor="green";
            score1.innerText++;
        }
    }
    else if(player_1==choices[1] && comp!=choices[1]){
        if(comp==choices[0]){
            para.innerText="You Won , Paper beats Rock";
            parabox.style.backgroundColor="green";
            score1.innerText++;
        }
        else{
            para.innerText="You Lose , Scissor beats Paper";
            parabox.style.backgroundColor="red";
            score2.innerText++;
        }
    }
    else if(player_1==choices[2] && comp!=choices[2]){
        if(comp==choices[0]){
            para.innerText="You lose , Rock beats Scissor";
            parabox.style.backgroundColor="red";
            score2.innerText++;
        }
        else{
            para.innerText="You Win , Scissor beats Paper";
            parabox.style.backgroundColor="green";
            score1.innerText++;
        }
    }

}