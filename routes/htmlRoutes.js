var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  // Load quiz page
  app.get("/quiz", function(req, res) {
    db.Questions.findAll({}).then(function(dbQuestions) {
      res.render("quiz");
    });
  });

  // Load leaderboard page
  app.get("/leaderboard", function(req, res) {
    db.Leaderboard.findAll({}).then(function(dbLeaderbord) {
      res.render("leaderboard");
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
