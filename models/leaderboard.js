module.exports = function (sequelize, DataTypes) {
  var Leaderboard = sequelize.define("leaderboard", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1, 50]

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c31b20f1b05ce730e575ced8dcf5f22769a638bd
      }
    },
    score: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
      }
<<<<<<< HEAD
    }
  });
  return Leaderboard;
};
=======
    },
    order: [
      ["score", "DESC"]
    ]
  });
  return Leaderboard;
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
>>>>>>> ebd7dbeec5ec109aafe58611cddf4de087df025a
>>>>>>> c31b20f1b05ce730e575ced8dcf5f22769a638bd
