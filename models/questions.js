module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Questions = sequelize.define("questions", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   validate: {
    //     allowNull:false
    //   }
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   validate: {
    //     allowNull:false
    //   }
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   validate: {
    //     allowNull:false
    //   }
    // },
    question: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1, 500]
      }
    },
    option1: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,255]
      }
    },
    option2: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,255]
      }
    },
    option3: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,255]
      }
    },
    option4: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,255]
      }
    },
    correctAnswer: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,255]
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len: [1,50]
      }
    }
  },{
    timestamps: false
  });
  return Questions;
=======
    var Questions = sequelize.define("questions", {
        question: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1, 500]
            }
        },
        option1: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,255]
            }
        },
        option2: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,255]
            }
        },
        option3: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,255]
            }
        },
        option4: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,255]
            }
        },
        correctAnswer: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,255]
            }
        },
        category: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                allowNull: false,
                len: [1,50]
            }
        }

    });
    return Questions;
>>>>>>> not sure of the changes
};