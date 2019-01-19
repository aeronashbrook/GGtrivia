
//require object with score data

$(document).ready(function(){
    $.ajax({
        url: "/api/leaderboard",
        method: "GET"
    }).then(function(data){
        leaderboardSubmit = data;
        id = data.id;
        console.log(leaderboardSubmit);
    });
    // var rank = 1;
    // for(var i = 0; i < 25; i++){
    //     $("#leaderboardTable").append("<tr><td>"+ rank + "</td><td>" + leaderboardSubmit.score[i] + "</td><td>" + leaderboardSubmit.username[i] + "</td></tr>");
    //     i++;
    //     rank++;
    // };
});