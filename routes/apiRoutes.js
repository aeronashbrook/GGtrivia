var db = require("../models");

module.exports = function(app) {
  // Get for Questions
  app.get("/api/question", function(req, res) {
    db.Questions.findAll({ 
      order: [
        Sequelize.literal("RAND()")
      ],
      limit: 1
    }).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });
  // Get for Leaderboard
  app.get("/api/leaderboard", function(req, res) {
    db.Leaderboard.findAll({}).then(function(dbLeaderboard) {
      res.json(dbLeaderboard);
    });
  });

  // Post for Questions
  app.post("/api/questions", function(req, res) {
    db.Questions.create(req.body).then(function(dbQuestions) {
      res.json(dbQuestions);
    });
  });
  // Post for Leaderboard
  app.post("/api/leaderboard", function(req, res) {
    db.Leaderboard.create(req.body).then(function(dbLeaderboard) {
      res.json(dbLeaderboard);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
