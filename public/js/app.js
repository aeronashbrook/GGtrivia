// var trivia_db = questions; // change when JawsDB is up and running
var points = 0;//start with 0 points.
var time = 10;//what should time limit be?
var trivia; //global variable for specific trivia question
var interval;
var usedQ = [];
var game = {
    questionPicker: function (){
        function picker(){
            var length = trivia_db.length;
            console.log('number of trivia_db options: ', trivia_db.length)
            var id = Math.floor(Math.random() * trivia_db.length);
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
                    game.display(trivia)
                } else {
                    // for(var i = 0; i < usedQ.length; i++){
                    //     if(trivia.id === usedQ[i]){
                    //         console.log('picking again...')
                    //         game.questionPicker();
                    //     } else {
                    //         console.log('trivia_db[id]:')
                    //         console.log(trivia_db[id])
                    //         trivia = trivia_db[id];
                    //         game.display(trivia);
                    //     }
                    // };
                    if(usedQ.indexOf(trivia.id)){
                        console.log('match! Try again!');
                    } else {
                        game.display(trivia);
                    }
                }   
            };
            select();
        };
        picker();
    },
    display: function(trivia){
        console.log('game.display is running...')
        var timerDiv = $('<div id = \'timer\'>timer:<div id = timeBox>10</div></div>');
        var qDiv = $('<div id = \'qDiv\'>' + trivia.question + '</div>');
        var ansDiv = $('<div class = \'ansDiv\'></div>');
        var a1 = $('<button id = \'a1\' class = \'btn ansBtn\' value = \'' + trivia.option1 + '\'>' + trivia.option1 + '</button>')
        var a2 = $('<button id = \'a2\' class = \'btn ansBtn\' value = \'' + trivia.option2 + '\'>' + trivia.option2 + '</button>')
        var a3 = $('<button id = \'a3\' class = \'btn ansBtn\' value = \'' + trivia.option3 + '\'>' + trivia.option3 + '</button>')
        var a4 = $('<button id = \'a4\' class = \'btn ansBtn\' value = \'' + trivia.option4 + '\'>' + trivia.option4 + '</button>')
        $(qDiv).appendTo('#mainDiv');
        $(timerDiv).appendTo(qDiv);
        $(ansDiv).appendTo(qDiv);
        $(a1).appendTo(qDiv);
        $(a2).appendTo(qDiv);
        $(a3).appendTo(qDiv);
        $(a4).appendTo(qDiv);
        //timer
        interval = setInterval(function(){
            time -= 1;
            $('#timeBox').empty();
            $('#timeBox').append(time);
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
            $('#mainDiv').empty();
            console.log('score: ', points);
            clearInterval(interval);
            game.questionPicker();
            //need to prevent repicking the same question.
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
$(document).ready(function(){
    console.log('trivia_db: ')
    console.log(trivia_db)
    game.questionPicker();
});

$(document).on('click', '.ansBtn', function(){
    var playerAns = $(this).val(); //not sure if this will work for the value of the button...
    console.log(playerAns); // we'll find out!
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
    }
];