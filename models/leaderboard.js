module.exports = function (sequelize, DataTypes) {
  var Leaderboard = sequelize.define("leaderboard", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1, 50]

      }
    },
    score: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
      }
    },
    order: [
      ["score", "DESC"]
    ]
  });
  return Leaderboard;
};