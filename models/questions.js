module.exports = function(sequelize, DataTypes) {
    var questions = sequelize.define("questions", {
        question: {
            type: DateTypes.STRING,
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
    return questions;
};