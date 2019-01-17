//require object with score data

$(document).ready(function(){
    var rank = 1;
    for(var i = 0; i < 25; i++){
        $("#leaderboardTable").append("<tr><td>"+ rank + "</td><td>" + whatever.score[i] + "</td><td>" + whatever.username[i] + "</td></tr>");
        i++;
        rank++;
    };
});