var db = require("../models");
var path = require('path');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // Load quiz page
  app.get("/quiz", function(req, res) {
    db.Questions.findAll({}).then(function(dbQuestions) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    });
  });

  // Load leaderboard page
  app.get("/leaderboard", function(req, res) {
    db.Leaderboard.findAll({}).then(function(dbLeaderbord) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    });
  });

  app.get("/public/js/app.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/js/app.js"));
  });

  app.get("/index.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.css"));
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
