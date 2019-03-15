$(document).ready(function () {
   //adding banner
    var bannerDiv = $("<div>");
    bannerDiv.text("CrystalsCollectors!");
    $("#main-div").prepend(bannerDiv);
    bannerDiv.attr("class", "banner");

    //adding instructions
    var txt1 = "<p>You will be given a randomnumber at the start of the game</p>";
    var txt2 = "<p>There are four crystals below. By clicking on a crystal y ou will add a specific amount of points to your total score.</p>";
    var txt3 = "<p>You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number.</p>";  // Create text with jQuery
    var txt4 = "<p>The value of each crystal is hidden from you until you click on it.</p>";         // Create text with DOM
    var txt5 = "<p>Each time when the game starts, the game will change the values of each crystal</p>";
    var instructionDiv = $("<div>")
    // instructionDiv.text("You will be given a randomnumber at the start of the game.");
    $("#main-div").append(instructionDiv);
    instructionDiv.attr("id", "instructionBox")
    instructionDiv.append(txt1,txt2, txt3, txt4, txt5);

    //adding conputeNumber
    var randomNumberDiv = $("<div>");
    randomNumberDiv.text("12");
    randomNumberDiv.attr("id", "randomBox");
    $("#main-div").append(randomNumberDiv);

    //adding scoreboard
    var winsTxt = "Wins: 0";
    var looseTxt = "Losses: 0";
    // var scoreboardDiv = $("<div>");
    // $("#main-div").append(scoreboardDiv)
    // scoreboardDiv.attr("class", "scoreBox");
    // scoreboardDiv.append(winsTxt, looseTxt);

    var scoreBoardWinDiv = $("<div>");
    scoreBoardWinDiv.attr("class", "scoreBox");
    scoreBoardWinDiv.text(winsTxt);
    $("#main-div").append(scoreBoardWinDiv);

    var scoreBoardLoseDiv = $("<div>");
    scoreBoardLoseDiv.attr("class", "scoreBox");
    scoreBoardLoseDiv.text(looseTxt);
    $("#main-div").append(scoreBoardLoseDiv);
    

    //add crystal images
    var crystalsDiv = $("<div>");
    // crystalsDiv.attr("class", "clearfix");
    $("#main-div").append(crystalsDiv);

    var crystal1Image =  $("<img>");
    crystal1Image.attr("class","crystal-image");
    crystal1Image.attr("src", "./assets/images/Diamond.png");
    crystalsDiv.append(crystal1Image);

    var crystal2Image =  $("<img>");
    crystal2Image.attr("class","crystal-image");
    crystal2Image.attr("src", "./assets/images/Ruby.png");
    crystalsDiv.append(crystal2Image);

    var crystal3Image =  $("<img>");
    crystal3Image.attr("class","crystal-image");
    crystal3Image.attr("src", "./assets/images/sapphire.png");
    crystalsDiv.append(crystal3Image);

    var crystal4Image =  $("<img>");
    crystal4Image.attr("class","crystal-image");
    crystal4Image.attr("src", "./assets/images/Topaz.png");
    crystalsDiv.append(crystal4Image);

    //add localscore
    var localScoreLabelDiv = $("<div>");
    localScoreLabelDiv.attr("id", "localScore");
    $("#main-div").append(localScoreLabelDiv);
    localScoreLabelDiv.text("Your local score is: ");

     //add localscoreNumber
     var localScoreNumberDiv = $("<div>");
     localScoreNumberDiv.attr("id", "localScoreNumber");
     $("#main-div").append(localScoreNumberDiv);
     localScoreNumberDiv.text("0");

     ////////////Actual gameplay logic/////////

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
        localScoreNumberDiv.html(gameData.userScore);
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
            scoreBoardWinDiv.text("Wins: " + gameData.wins);
            // scoreboardDiv.append(gameData.wins, gameData.lossses);
            // $("#win-number").text(gameData.wins); //display the win numbers
            // $("#info-bar").html("Nice work! You won!")
            resetTheGame(); // since we have a winner we have to restart the game
        }else if(gameData.userScore > gameData.computeNumber){
            //user has lost
            gameData.lossses++;
            scoreBoardLoseDiv.text("Losses: " + gameData.lossses);
            // scoreboardDiv.text(gameData.wins, gameData.lossses);
            // $("#loss-number").html(gameData.lossses);
            // $("#info-bar").html("Sorry... better luck next time...")
            resetTheGame();
        }
    }

    function startTheGame(){
        //compute the random number to beat
        gameData.computeNumber = createRandom(19, 120);
        $("#randomBox").text(gameData.computeNumber);
        createCrystalValues();
        
        //Image clicks
        crystal1Image.click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal1;
            localScoreNumberDiv.html(gameData.userScore);
            checkScore();
        });

        crystal2Image.click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal2;
            localScoreNumberDiv.html(gameData.userScore);
            checkScore();
        });

        crystal3Image.click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal3;
            localScoreNumberDiv.html(gameData.userScore);
            checkScore();
        });

        crystal4Image.click(function(){
            gameData.userScore = gameData.userScore + gameData.crystal4;
            localScoreNumberDiv.html(gameData.userScore);
            checkScore();
        });
    }
});