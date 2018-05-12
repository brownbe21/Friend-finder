//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var friendLists = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendLists);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    var friendScores = req.body.scores;
    var scoresArray = [];
    var mostCompatible = 0;
    var friendCount = 0;
    

    //runs through all current friends in list
    for(var i=0; i<friendLists.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<friendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendLists[i].scores[j]) - parseInt(friendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[mostCompatible]){
        mostCompatible = i;
      }
    }

    //return mostCompatible data
    var bff = friendLists[mostCompatible];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendLists.push(req.body);
  });
};

