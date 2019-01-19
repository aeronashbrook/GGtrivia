DROP DATABASE IF EXISTS trivia;

CREATE DATABASE trivia;

USE trivia;

<<<<<<< HEAD
=======
CREATE TABLE questions (
	id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    correctAnswer VARCHAR(255) NOT NULL,
    category VARCHAR(100)
);


CREATE TABLE leaderboard (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    score INT NOT NULL
);

>>>>>>> c31b20f1b05ce730e575ced8dcf5f22769a638bd
