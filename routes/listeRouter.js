const express = require('express');
require('express-async-errors');
const User = require('../controllers/Users');
const Tableau = require('../controllers/Tableaus');
const Liste = require('../controllers/Listes');
const Carte = require('../controllers/Cartes');


exports.router = (function () {
    const listeRouter = express.Router();
    //--------------------------Routes User------------------------

    listeRouter.route('/inscription').post(User.inscription);
    listeRouter.route('/connexion').post(User.connexion);
    listeRouter.route('/profil').get(User.profil);

    //--------------------------Routes Tableau------------------------

    listeRouter.route('/tableau').post(Tableau.creerTableau);
    listeRouter.route('/tableaux').get(Tableau.getTableaus);
    listeRouter.route('/tableau/:id').get(Tableau.getTableau);
    listeRouter.route('/tableau/:id').put(Tableau.putTableau);
    listeRouter.route('/tableau/:id').delete(Tableau.deleteTableau);

    listeRouter.route('/userTableau').get(Tableau.userTableau);



    //--------------------------Routes Liste--------------------------

    listeRouter.route('/liste/:id').post(Liste.creerListe);
    listeRouter.route('/liste/:id').get(Liste.getListe);
    listeRouter.route('/liste/:id').delete(Liste.deleteListe);
    listeRouter.route('/liste/:id').put(Liste.putListe);

    listeRouter.route('/userTableauListe').get(Liste.userTableauListe);

    //--------------------------Routes Carte--------------------------
    listeRouter.route('/carte/:id').post(Carte.creerCarte);
    listeRouter.route('/carte/:id').get(Carte.getCarte);
    listeRouter.route('/carte/:id').delete(Carte.deleteCarte);
    listeRouter.route('/carte/:id').put(Carte.putCarte);

    return listeRouter;
})();