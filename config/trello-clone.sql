CREATE TABLE Users (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
nom VARCHAR(255),
prenom VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
iniciales VARCHAR(255),
nom_utilisateur VARCHAR(255),
biographie VARCHAR(255));

/*
npx sequelize-cli model:generate --name eser --attributes nom:string,prenom:string,email:string,password:string,initiales:string,nom_utilisateur:string,biographie:string
*/

CREATE TABLE Equipes (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
nom VARCHAR(255),
type VARCHAR(255),
description VARCHAR(255),
userId INT,
FOREIGN KEY (userId) REFERENCES users (id));

/*
npx sequelize-cli model:generate --name equipe --attributes nom:string,type:string,description:string
*/

CREATE TABLE Tableaus (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
titre VARCHAR(255),
image VARCHAR(255),
modele VARCHAR(255),
userId INT,
FOREIGN KEY (userId) REFERENCES Users (id),
userEquipe INT,
FOREIGN KEY (userEquipe) REFERENCES Equipes (id));

/*
npx sequelize-cli model:generate --name tableau --attributes titre:string,image:string,modele:string
*/

CREATE TABLE Listes (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
titre VARCHAR(255),
suivre VARCHAR(255),
tableauId INT,
FOREIGN KEY (tableauId) REFERENCES Tableaus (id));

/*
npx sequelize-cli model:generate --name liste --attributes titre:string,suivre:string
*/

CREATE TABLE Cartes (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id),
nom VARCHAR(255),
description VARCHAR(1000),
activite VARCHAR(255),
date_debut DATE,
date_limite DATE,
piece VARCHAR(255),
listeId INT,
FOREIGN KEY (listeId) REFERENCES Listes (id));

/*
npx sequelize-cli model:generate --name carte --attributes nom:string,description:string,activite:string,date_debut:date,date_limite:date,piece:string, 
*/


INSERT INTO `Users` 
(`id`, 
`nom`, 
`prenom`, 
`email`, 
`password`, 
`initiales`, 
`nom_utilisateur`, 
`biographie`, 
`createdAt`, 
`updatedAt`) 
VALUES 
('1',
'Mata',
'Miguel', 
'miguelito@gmail', 
'123456', 
'NMGM', 
'MiguelGMata', 
'Vénézuelien', 
'2020-06-30 00:00:00', 
'2020-06-30 00:00:00');