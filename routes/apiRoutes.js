var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // Get for Questions
  app.get("/api/question", function(req, res) {
    db.questions.findAll({ 
      order: [
        Sequelize.literal("RAND()")
      ],
      limit: 1
    }).then(function(dbQuestions) {
      console.log("dbQuestions =");
      console.log(JSON.stringify(dbQuestions[0]));
      res.json(dbQuestions);
    }).catch(function(err){
      console.log(err);
    });
  });
  // Get for Leaderboard
  app.get("/api/leaderboard", function(req, res) {
    db.leaderboard.findAll({
      order: [
        ["score", "DESC"]
      ]
    }).then(function(dbLeaderboard) {
      res.json(dbLeaderboard);
    });
  });

  // Post for Questions
  app.post("/api/post/question", function(req, res) {
    console.log("***************************");
    console.log(req.body);
    console.log("***************************");
    db.questions.create({
      question: req.body.question,
      correctAnswer: req.body.correctAnswer,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    }).catch(Sequelize.ValidationError, function(err){
      console.log(err);
    });
  });
  
  // Post for Leaderboard
  app.post("/api/post/leaderboard", function(req, res) {
    console.log("***************************");
    console.log(req.body);
    console.log("***************************");
    db.leaderboard.create({
      name:req.body.name,
      score: req.body.score
    }).then(function(dbLeaderboard) {
      res.json(dbLeaderboard);
    }).catch(Sequelize.ValidationError, function(err){
      console.log(err);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
