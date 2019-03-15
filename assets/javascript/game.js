$(document).ready(function () {

    //Initializing data////////
    //game object
    var gameData = {
        wins: 0,
        lossses: 0,
        userScore: 0,
        computeNumber: 0,
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0,
    }
    resetTheGame();

    //helper functions////////
    // var tbWin = document.getElementById("win-number");
    // tbWin.textContent = "try";
    // console.log(gameData.wins);
    // $("#win").text(gameData.wins);
    // $("#win-number").html(gameData.wins);
    //resetting the game
    function resetTheGame() {
        gameData.userScore = 0;
        gameData.computeNumber = 0;
        gameData.crystal1 = 0;
        gameData.crystal2 = 0;
        gameData.crystal3 = 0;
        gameData.crystal4 = 0;
        $("#currentScore").html(gameData.userScore);
        startTheGame();
    }
    //function that creates random number
    function createRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    }

    //function that creates random numbers for crystals
    function createCrystalValues() {
        //using do while to ensure that I have no duplicates
        gameData.crystal1 = createRandom(1, 12);
        do {
            gameData.crystal2 = createRandom(1, 12);
        } while (gameData.crystal12 === gameData.crystal1)

        do {
            gameData.crystal3 = createRandom(1, 12);
        } while (gameData.crystal3 === gameData.crystal2 || gameData.crystal3 === gameData.crystal2)

        do {
            gameData.crystal4 = createRandom(1, 12);
        } while (gameData.crystal4 === gameData.crystal1 || gameData.crystal4 === gameData.crystal2 || gameData.crystal4 === gameData.crystal3)
    }

    function checkScore() {
        if (gameData.userScore === gameData.computeNumber) {
            //we have a winner
            gameData.wins++;
            $("#win-number").text(gameData.wins); //display the win numbers
            $("#info-bar").html("Nice work! You won!")
            resetTheGame(); // since we have a winner we have to restart the game
        }else if(gameData.userScore > gameData.computeNumber){
            //user has lost
            gameData.lossses++;
            $("#loss-number").html(gameData.lossses);
            $("#info-bar").html("Sorry... better luck next time...")
            resetTheGame();
        }
    }

    function startTheGame(){
        //compute the random number to beat
        gameData.computeNumber = createRandom(19, 120);
        $("#randomBox").text(gameData.computeNumber);
        createCrystalValues();
        
        //Image clicks
        $("#crystal1").click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal1;
            $("#currentScore").html(gameData.userScore);
            checkScore();
        });

        $("#crystal2").click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal2;
            $("#currentScore").html(gameData.userScore);
            checkScore();
        });

        $("#crystal3").click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal3;
            $("#currentScore").html(gameData.userScore);
            checkScore();
        });

        $("#crystal4").click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal4;
            $("#currentScore").html(gameData.userScore);
            checkScore();
        });
    }

});
