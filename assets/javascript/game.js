$(document).ready(function () {


    //Initializing data////////
    //game object
    var gameData = {
        wins: 15,
        lossses: 0,
        userScore: 0,
        computeNumber: 0,
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0,
    }

    //helper functions////////
    // var tbWin = document.getElementById("win-number");
    // tbWin.textContent = "try";
    console.log(gameData.wins);
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
            resetTheGame(); // since we have a winner we have to restart the game
        }else if(gameData.userScore > gameData.computeNumber){
            //user has lost
            gameData.lossses++;
            $("#loss-number").html(gameData.lossses);
            resetTheGame();
        }
    }

    //compute the random number to beat
    gameData.computeNumber = createRandom(19, 120);

});
