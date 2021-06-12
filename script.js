
{
    let currentScore = [0,0];
    let score = [0,0];
    let currentPlayer = 1;
    let diceNumber = 0;
    let gameOver = false;
    let winPoint = 100;
    GameStart();

    document.querySelector(".btn--new").addEventListener("click",function(){

        location.reload();

    });

    document.querySelector(".btn--roll").addEventListener("click",function(){
        if(gameOver)
            return;
        diceRoll();
    });

    document.querySelector(".btn--hold").addEventListener("click",function(){
        score[currentPlayer-1]+=currentScore[currentPlayer-1];
        currentScore[currentPlayer-1] = 0;
        WinnerCheck();
        if(gameOver)
            return;
        currentPlayerChange();
        UIUpdate();
    });
    function GameStart(){
        currentScore = [0,0];
        TopScore = [0,0]
        document.querySelector(".dice").style.display = "none";
        document.getElementById("score--"+1).innerHTML = '00';
        document.getElementById("score--"+2).innerHTML = '00';
        document.getElementById("current--"+1).innerHTML = '00';
        document.getElementById("current--"+2).innerHTML = '00';
    }
    function UIUpdate(){
        document.getElementById("score--"+currentPlayer).innerHTML = score[currentPlayer-1] < 10 ? `0${score[currentPlayer-1]}`: score[currentPlayer-1];

        document.getElementById("current--"+currentPlayer).innerHTML =  currentScore[currentPlayer-1] < 10 ? `0${currentScore[currentPlayer-1]}`:currentScore[currentPlayer-1];

        if(currentPlayer == 1){
            document.querySelector(`.player--1`).classList.add("player--active");
            if(document.querySelector(`.player--2`).classList.contains("player--active")){

                document.querySelector(`.player--2`).classList.remove("player--active");
            
            }
        }
        else
        {
            document.querySelector(`.player--2`).classList.add("player--active");
            if(document.querySelector(`.player--1`).classList.contains("player--active")){

                document.querySelector(`.player--1`).classList.remove("player--active");
            }
        }

    }

    function diceRoll(){

        let dice = document.querySelector(".dice");
        dice.style.display = "";
        diceNumber = Math.floor(Math.random()*6)+1;
        if(diceNumber == 1){

            currentScore[currentPlayer-1] = 0;
            currentPlayerChange();
        }
        else
        {
            currentScore[currentPlayer-1]+=diceNumber;
        }
        UIUpdate();
        dice.src = `dice-${diceNumber}.png`;

    }


    function currentPlayerChange(){
        UIUpdate();
        currentPlayer = currentPlayer == 1 ? 2 : 1; 

    }
    function WinnerCheck(){
        if(score[0]>=winPoint)
        {
            gameOver = true;
            document.getElementById(`name--1`).innerHTML = "WINNER!"
            document.getElementById(`name--1`).style.color = "red"

        }
        if(score[1]>=winPoint){
            document.getElementById(`name--2`).innerHTML = "WINNER!"
            document.getElementById(`name--2`).style.color = "red"

            gameOver = true;
        }
        UIUpdate();

    }
};

















