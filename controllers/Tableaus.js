const models = require('../models');
const jwttoken = require('../middlewares/jwt');
const { UnauthorizedError } = require('../middlewares/helpers/errors');
const { User, Carte, Liste, Tableau } = models;


module.exports = {
    creerTableau: async (req, res, next) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        const tableauData = {
            userId: user.id,
            titre: req.body.titre,
            image: req.body.image,
            modele: req.body.modele
        }
        if (!tableauData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })

        } else {
            await models.Tableau.create(tableauData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },

    getTableaus: async (req, res) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        //console.log(decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        //console.log('tutu', user.id)
        await models.Tableau.findAll({
            where: {
                userId: user.id,
                //id: req.params.id
            },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: [
                        "id",
                        "nom",
                        "prenom",
                        "initiales",
                        "nom_utilisateur"
                    ],
                },
                {
                    model: Liste,
                    as: "Listes",
                    attributes: [
                        "id",
                        "tableauId",
                        "titre"
                    ],
                    include: [
                        {
                            model: Carte,
                            as: "Cartes",
                            attributes: [
                                "id",
                                "nom",
                                "description",
                                "activite",
                                "date_debut",
                                "date_limite",
                                "piece"
                            ],
                        },
                    ],
                },
            ],
        })
            .then(tableaus => {
                res.json(tableaus)
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },

    getTableau: async (req, res, next) => {
        await models.Tableau.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: [
                        "id",
                        "nom",
                        "prenom",
                        "initiales",
                        "nom_utilisateur"
                    ]
                }
            ],
        })
            .then(tableau => {
                if (tableau) {
                    res.json(tableau)
                } else {
                    res.send("Le tableau n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },

    deleteTableau: async (req, res, next) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        //console.log(decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        //console.log('tutu', user.id)
        await models.Tableau.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Tableau supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },

    putTableau: async (req, res, next) => {
        const { id } = req.params;
        const tableauData = {
            titre: req.body.titre,
            image: req.body.image,
            modele: req.body.modele,

        }
        if (!tableauData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })
        } else
            await models.Tableau.update(
                tableauData,
                { where: { id } }
            )
                .then(() => {
                    res.json({ status: 'Tableau mise à jour!' })
                })
                //.catch(err => handleError(err))
                .catch(err => {
                    res.send('error: ' + err)
                })
    },

    userTableau: async (req, res) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        console.log('coroto', decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        console.log('miguelito', user);
        await models.User.findOne({
            where: {
                id: user.id
            },
            include: [
                {
                    model: Tableau,
                    as: "Tableaus",
                    attributes: [
                        "id",
                        "titre",
                        "image",
                        "modele"
                    ]
                },
            ],

        })
            .then(user => {
                if (user) {
                    res.json(user)
                } else {
                    res.send("L'utilisateur n'existe pas")
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }

}
