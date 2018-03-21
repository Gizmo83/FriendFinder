var friends = require("./friends");

app.get("/api/friends", function(req, res) {

    return res.json(characters);
  });

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
});