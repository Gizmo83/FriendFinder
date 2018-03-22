var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {

        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        var userScores = userInput.scores;

        var diffArr = [];
        
        for(var i = 0; i < friends.length; i++){
            var diff = 0;
            for(var j = 0; j < userScores.length; j++){
                diff += Math.abs(friends[i].scores[j] - userScores[j]);    
            }
            diffArr.push(diff);
            console.log(diffArr);
        }
        var matchScore = diffArr[0];
        for (var i = 0; i < diffArr.length; i++){
            if(diffArr[i] < matchScore){
                matchScore = diffArr[i]
            }
        }
        //console.log(matchScore);
        var match = diffArr.indexOf(matchScore);
        //console.log(match);
        var matchName = friends[match].name;
        var matchImage = friends[match].photo;
        //console.log(matchName + matchImage);
        res.json({name: matchName, image: matchImage});
    });
};