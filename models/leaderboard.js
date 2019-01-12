module.exports = function(sequelize, DataTypes) {
    var leaderboard = sequelize.define("leaderboard", {
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
        }
    });
    return leaderboard;
}