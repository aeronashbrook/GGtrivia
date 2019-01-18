module.exports = function (sequelize, DataTypes) {
  var Leaderboard = sequelize.define("leaderboard", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1, 50]

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added a submit.js file for submit form
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
<<<<<<< HEAD
};
=======
            }
        },
        score: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        order: [
            ['score', 'DESC']
        ]
    });
    return Leaderboard;
}
>>>>>>> leaderboard order
=======
};
>>>>>>> added a submit.js file for submit form
