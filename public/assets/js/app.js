// var trivia_db = questions; // change when JawsDB is up and running
var points = 0;//start with 0 points.
var trivia; //global variable for specific trivia question
var interval;
var usedQ = [];


$("#circleTimer").circletimer({
    onComplete: function() {
        answerColor();
        console.log("this is dumb");
        setTimeout(game.over, 3000);
    },
    timeout: 10000
  });


//main game function
var game = {
    questionPicker: function (){
        function picker(){
            var id;
            // $.get("api/question", function(data){
            //     trivia = data;
            //     id = data.id;
            //     select();
            //     $("#circleTimer").circletimer("start");
            // });
            $.ajax({
                url: "/api/question",
                method: "GET"
            }).then(function(data){
                trivia = data[0];
                id = data.id;
                console.log(trivia)
                select();
            });
            // var length = trivia_db.length;
            // console.log('number of trivia_db options: ', trivia_db.length)
            // var id = Math.floor(Math.random() * length);
            // console.log('random ID:');
            // console.log(id);
            function select(){
                console.log('usedQ:');
                console.log(usedQ);
                if(usedQ.length === 0){
                    console.log('first question!')
                    console.log('trivia:');
                    console.log(trivia);
                    game.display();
                } 
                // else if (usedQ.length === trivia_db.length){
                //     //no more questions!
                //     alert('You answered all of the questions!')
                //     game.over();
                // }
                 else {
                    for(var i = 0; i < usedQ.length; i++){
                        if(id === usedQ[i]){
                            console.log(trivia.id + '!=' + usedQ[i])
                            console.log('Already used that question, picking again...')
                            game.questionPicker();
                        } else {
                            game.display();
                        }
                    };
                }   
            };
            //Moved up because of async
            // select();
            // $("#circleTimer").circletimer("start");
        };
        picker();
    },
    display: function(){
        console.log('game.display is running...')
        $("#circleTimer").circletimer("start");
        var qTitle = $('#qTitle');
        var a1 = $('#a1');
        var a2 = $('#a2');
        var a3 = $('#a3');
        var a4 = $('#a4');

        $(qTitle).empty();
        $(a1).empty();
        $(a2).empty();
        $(a3).empty();
        $(a4).empty();
 
        $(qTitle).append(trivia.question);
        $(a1).append('<i class="fas fa-check" id="check1"></i><i class="fas fa-times" id="x1"></i>' + trivia.option1);
        $(a2).append('<i class="fas fa-check" id="check2"></i><i class="fas fa-times" id="x2"></i>' + trivia.option2);
        $(a3).append('<i class="fas fa-check" id="check3"></i><i class="fas fa-times" id="x3"></i>' + trivia.option3);
        $(a4).append('<i class="fas fa-check" id="check4"></i><i class="fas fa-times" id="x4"></i>' + trivia.option4);
    },
    verify: function(playerAns){
        console.log('verifying...')
        var actualAnswer = trivia.correctAnswer;
        usedQ.push(trivia.id);
        console.log('trivia.id:');
        console.log(trivia.id);
        // time = 10;
        if (actualAnswer != playerAns){
            console.log('game.over()')
            console.log(actualAnswer, ' != ', playerAns)
            game.over();
        } else {
            points += 1;
            console.log('score: ', points);
            clearCss();
            game.questionPicker();
        }
    },
    over: function(){
        $('#mainDiv').empty();
        $("#questionDiv").hide();
        $("#gameOver").show();
        $("#displayScore").text("Your final score was: " + points);
        $("#usernameSubmit").on("click", function(event) {
            event.preventDefault();
            $.ajax({
                url: "/api/leaderboard",
                method: "POST",
                data: leaderboardSubmit
            }).then(function(req, res) {
                console.log(req);
                console.log(res);
            });
        });
        var username = $("#usernameInput").val().trim();
        var leaderboardSubmit = {
            name: username,
            score: points
        }
        //post score to database

        score = 0;
    }
};

//Starts game
$(document).ready(function(){
    console.log('starting app')
    game.questionPicker();
});

//Aeron's stuff
$("#option1").on("click", function(){
    $("#option1").css("font-size", "24px");
    $("#circleTimer").circletimer("stop");
    answerColor();
    if ($("#a1").text().trim() === trivia.correctAnswer) {
        $("#check1").show();
    } else {
        $("#x1").show();
    }
    var playerAns = $(this).text().trim();
    setTimeout(function(){
        startExit();
    },2500);
    setTimeout(function(){
        game.verify(playerAns);
    },3550);
});
$("#option2").on("click", function(){
    $("#option2").css("font-size", "24px");
    $("#circleTimer").circletimer("stop");
    answerColor();
    if ($("#a2").text().trim() === trivia.correctAnswer) {
        $("#check2").show();
    } else {
        $("#x2").show();
    }
    var playerAns = $(this).text().trim();
    setTimeout(function(){
        startExit();
    },2500);
    setTimeout(function(){
        game.verify(playerAns);
    },3550);
});
$("#option3").on("click", function(){
    $("#option3").css("font-size", "24px");
    $("#circleTimer").circletimer("stop");
    answerColor();
    if ($("#a3").text().trim() === trivia.correctAnswer) {
        $("#check3").show();
    } else {
        $("#x3").show();
    }
    var playerAns = $(this).text().trim();
    setTimeout(function(){
        startExit();
    },2500);
    setTimeout(function(){
        game.verify(playerAns);
    },3550);
});
$("#option4").on("click", function(){
    $("#option4").css("font-size", "24px");
    $("#circleTimer").circletimer("stop");
    answerColor();
    if ($("#a4").text().trim() === trivia.correctAnswer) {
        $("#check4").show();
    } else {
        $("#x4").show();
    }
    var playerAns = $(this).text().trim();
    setTimeout(function(){
        startExit();
    },2500);
    setTimeout(function(){
        game.verify(playerAns);
    },3550);
});

function answerColor(){
    if ($("#option1").text().trim() === trivia.correctAnswer) {
        $("#option1").css("color", "green");
    } else {
        $("#option1").css("color", "red");
    }

    if ($("#option2").text().trim() === trivia.correctAnswer) {
        $("#option2").css("color", "green");
    } else {
        $("#option2").css("color", "red");
    }

    if ($("#option3").text().trim() === trivia.correctAnswer) {
        $("#option3").css("color", "green");
    } else {
        $("#option3").css("color", "red");
    }

    if ($("#option4").text().trim() === trivia.correctAnswer) {
        $("#option4").css("color", "green");
    } else {
        $("#option4").css("color", "red");
    } 
};

function clearCss(){
    $("#x1").hide();
    $("#x2").hide();
    $("#x3").hide();
    $("#x4").hide();
    $("#check1").hide();
    $("#check2").hide();
    $("#check3").hide();
    $("#check4").hide();
    $(".buttonOptions").css("color", "gray");
    $(".buttonOptions").css("font-size", "18px");
    $(".buttonOptions").css("background color", "white");
    $("#option1").removeClass("animated flipOutX");
    $("#option2").removeClass("animated flipOutX");
    $("#option3").removeClass("animated flipOutX");
    $("#option4").removeClass("animated flipOutX");
    $("#circleTimer").removeClass("animated fadeOut duration-1s");
    $("#qTitle").removeClass("animated fadeOut duration-1s");
    setTimeout(animations, 1);
};
function animations(){
    $("#option1").addClass("animated flipInX delay-1s");
    $("#option2").addClass("animated flipInX delay-1s");
    $("#option3").addClass("animated flipInX delay-1s");
    $("#option4").addClass("animated flipInX delay-1s"); 
    $("#circleTimer").addClass("animated fadeIn duration-1s");
    $("#qTitle").addClass("animated fadeIn duration-1s");
};
function startExit() {
    $("#option1").removeClass("animated flipInX delay-1s");
    $("#option2").removeClass("animated flipInX delay-1s");
    $("#option3").removeClass("animated flipInX delay-1s");
    $("#option4").removeClass("animated flipInX delay-1s");
    $("#circleTimer").removeClass("animated fadeIn duration-1s");
    $("#qTitle").removeClass("animated fadeIn duration-1s");
    setTimeout(exitAni, 1);
}
function exitAni(){
    $("#option1").addClass("animated flipOutX");
    $("#option2").addClass("animated flipOutX");
    $("#option3").addClass("animated flipOutX");
    $("#option4").addClass("animated flipOutX");
    $("#circleTimer").addClass("animated fadeOut duration-1s");
    $("#qTitle").addClass("animated fadeOut duration-1s");
}

