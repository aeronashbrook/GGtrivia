var trivia_db = require(/* trivia database location */);
var points = 0;//start with 0 points.
var time = 10;//what should time limit be?
var trivia; //global variable for triva object

var game = {
    questionPicker: function (trivia_database){
        var choice = /* in order or random?? */; 
        trivia = trivia;
    },
    display: function(trivia){
        /*trivia => specific question. Assumes the following format:
        trivia = {
            q: question,
            a: answer,
            ap:[
                0,
                1,
                2,
                3
            ]
        };*/
        var timerDiv = $('<div id = \'timer\'>timer:<div id = timeBox>10</div></div>');
        var qDiv = $('<div id = \'qDiv\'>' + trivia.q + '</div>');
        var ansDiv = $('<div class = \'ansDiv\'></div>');
        var a1 = $('<button id = \'a1\' class = \'btn ansBtn\'>' + trivia.ap[0] + '</button>')
        var a2 = $('<button id = \'a2\' class = \'btn ansBtn\'>' + trivia.ap[1] + '</button>')
        var a3 = $('<button id = \'a3\' class = \'btn ansBtn\'>' + trivia.ap[2] + '</button>')
        var a4 = $('<button id = \'a4\' class = \'btn ansBtn\'>' + trivia.ap[3] + '</button>')
        $(qDiv).appendTo(/* page game div */);
        $(timerDiv).appendTo(qDiv);
        $(ansDiv).appendTo(qDiv);
        $(a1).appendTo(qDiv);
        $(a2).appendTo(qDiv);
        $(a3).appendTo(qDiv);
        $(a4).appendTo(qDiv);
        setTimeout(function(){
            time -= 1;
            $('#timeBox').empty();
            $('#timeBox').append(time);
        }, 1000);
    },
    verify: function(trivia, playerAns){
        var actualAnswer = trivia.a;
        time = 10;
        if (actualAnswer != playerAns){
            game.over()
        } else {
            score += 1;
            game.questionPicker();
            //need to prevent repicking the same question.
        }
    },
    over: function(){
        $(/* page game div */).empty();
        alert('Game over! Your final score was ' + score);
        //insert actual game ending here.
    }
};

$(document).on('click', 'ansBtn', function(){
    var playerAns = $(this).val(); //not sure if this will work for the value of the button...
    game.verify(trivia, playerAns);
})