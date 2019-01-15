// var trivia_db = questions; // change when JawsDB is up and running
var points = 0;//start with 0 points.
var time = 10;//what should time limit be?
var trivia; //global variable for specific trivia question
var interval;
var usedQ = [];

//main game function
var game = {
    questionPicker: function (){
        function picker(){
            var length = trivia_db.length;
            console.log('number of trivia_db options: ', trivia_db.length)
            var id = Math.floor(Math.random() * length);
            console.log('random ID:');
            console.log(id);
            function select(){
                console.log('selector running...')
                console.log('usedQ:');
                console.log(usedQ);
                if(usedQ.length === 0){
                    console.log('first question!')
                    trivia = trivia_db[id];
                    console.log('trivia:');
                    console.log(trivia);
                    console.log('trivia.id:');
                    console.log(trivia.id);
                    game.display();
                } else if (usedQ.length === trivia_db.length){
                    game.over();
                } else {
                    for(var i = 0; i < usedQ.length; i++){
                        if(id === usedQ[i]){
                            console.log(trivia.id + '!=' + usedQ[i])
                            console.log('picking again...')
                            game.questionPicker();
                        } else {
                            console.log('trivia_db[id]:')
                            console.log(trivia_db[id])
                            trivia = trivia_db[id];
                            game.display(trivia);
                        }
                    };
                }   
            };
            select();
        };
        picker();
    },
    display: function(){
        console.log('game.display is running...')
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
        $(a1).append(trivia.option1);
        $(a2).append(trivia.option2);
        $(a3).append(trivia.option3);
        $(a4).append(trivia.option4);
        // var timerDiv = $('<div id = \'timer\'>timer:<div id = timeBox>10</div></div>');
        // var qDiv = $('<div id = \'qDiv\'>' + trivia.question + '</div>');
        // var ansDiv = $('<div class = \'ansDiv\'></div>');
        // var a1 = $('<button id = \'a1\' class = \'btn ansBtn\' value = \'' + trivia.option1 + '\'>' + trivia.option1 + '</button>')
        // var a2 = $('<button id = \'a2\' class = \'btn ansBtn\' value = \'' + trivia.option2 + '\'>' + trivia.option2 + '</button>')
        // var a3 = $('<button id = \'a3\' class = \'btn ansBtn\' value = \'' + trivia.option3 + '\'>' + trivia.option3 + '</button>')
        // var a4 = $('<button id = \'a4\' class = \'btn ansBtn\' value = \'' + trivia.option4 + '\'>' + trivia.option4 + '</button>')
        // $('#mainDiv').empty();
        // $(qDiv).appendTo('#mainDiv');
        // $(timerDiv).appendTo(qDiv);
        // $(ansDiv).appendTo(qDiv);
        // $(a1).appendTo(qDiv);
        // $(a2).appendTo(qDiv);
        // $(a3).appendTo(qDiv);
        // $(a4).appendTo(qDiv);
        //timer
        clearInterval(interval);
        time = 10;
        interval = setInterval(function(){
            console.log('interval')
            time -= 1;
            $('#timeBox').empty();
            $('#timeBox').append(time);
            if (time < 0){
                game.over();
            }
        }, 1000);
    },
    verify: function(playerAns){
        console.log('verifying...')
        var actualAnswer = trivia.correctAnswer;
        usedQ.push(trivia.id);
        console.log('trivia.id:');
        console.log(trivia.id);
        time = 10;
        if (actualAnswer != playerAns){
            console.log('game.over()')
            console.log(actualAnswer, ' != ', playerAns)
            game.over();
        } else {
            points += 1;
            console.log('score: ', points);
            game.questionPicker();
        }
    },
    over: function(){
        $('#mainDiv').empty();
        alert('Game over! Your final score was ' + points);
        //insert actual game ending here.
        //go back to home?
        score = 0;
        location.reload();
    }
};

//Starts game
$(document).ready(function(){
    console.log('trivia_db: ');
    console.log(trivia_db);
    //Should make AJAX request for data and save as trivia_db
    game.questionPicker();
});

//on-click for question buttons
$(document).on('click', '.ansBtn', function(){
    var playerAns = $(this).text().trim();
    game.verify(playerAns);
});

//sample data
var trivia_db = [
    {
        id:0,
        question: "What is the Capitol of Minnesota?",
        option1: "Minneapolis",
        option2: "Saint Paul",
        option3: "Saint Cloud",
        option4: "Duluth",
        correctAnswer: "Saint Paul",
        category: "Geography"
    },
    {
        id:1,
        question: "What color is the sky at noon on a clear day?",
        option1: "Red",
        option2: "Purple",
        option3: "Blue",
        option4: "Orange",
        correctAnswer: "Blue",
        category: "Random"
    },
    {
        id:2,
        question: "Tasmania is an isolated island state belonging to which country?",
        option1: "New Zealand",
        option2: "Malaysia",
        option3: "Austria",
        option4: "Australia",
        correctAnswer: "Australia",
        category: "Geography"
    },
    {
        id:3,
        question: "What is the Capitol of Nicaragua",
        option1: "San Salvador",
        option2: "Leon",
        option3: "Managua",
        option4: "San Jose",
        correctAnswer: "Managua",
        category: "Geography"
    }
];

//Aeron's stuff

var answer = question.correctAnswer;
var thing = $("#option3").text().trim();
console.log(thing)
$("#option1").on("click", function(){
    $("#option1").css("font-size", "24px");
    correctAnswer();
    if ($("#option1").text().trim() === answer) {
        $("#check1").show();
    } else {
        $("#x1").show();
    }
});
$("#option2").on("click", function(){
    $("#option2").css("font-size", "24px");
    correctAnswer();
    if ($("#option2").text().trim() === answer) {
        $("#check2").show();
    } else {
        $("#x2").show();
    }
});
$("#option3").on("click", function(){
    $("#option3").css("font-size", "24px");
    correctAnswer();
    if ($("#option3").text().trim() === answer) {
        $("#check3").show();
    } else {
        $("#x3").show();
    }
});
$("#option4").on("click", function(){
    $("#option4").css("font-size", "24px");
    correctAnswer();
    if ($("#option4").text().trim() === answer) {
        $("#check4").show();
    } else {
        $("#x4").show();
    }
});



function correctAnswer(){
    if ($("#option1").text().trim() === answer) {
        $("#option1").css("color", "green");
    } else {
        $("#option1").css("color", "red");
    }

    if ($("#option2").text().trim() === answer) {
        $("#option2").css("color", "green");
    } else {
        $("#option2").css("color", "red");
    }

    if ($("#option3").text().trim() === answer) {
        $("#option3").css("color", "green");
    } else {
        $("#option3").css("color", "red");
    }

    if ($("#option4").text().trim() === answer) {
        $("#option4").css("color", "green");
    } else {
        $("#option4").css("color", "red");
    } 
};

var $loader = $('#loader'),
    alpha = 0,
    pi = Math.PI,
    time = 25;

function draw() {
  alpha++;

  var r = ( alpha * pi / 180 ),
    x = Math.sin( r ) * 125,
    y = Math.cos( r ) * - 125,
    mid = ( alpha >= 180 ) ? 1 : 0,
    animate = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';

    if (alpha < 360){
      setTimeout(draw, time); // Redraw
    }else{
        animate = "M 0 0 v -125 A 125 125 1 1 1 -.1 -125 z";
        correctAnswer();
    }

  loader.setAttribute( 'd', animate );

};

draw.call(this);
