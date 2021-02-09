const models = require('../models');
const jwttoken = require('../middlewares/jwt');
const { UnauthorizedError } = require('../middlewares/helpers/errors');
const { User, Carte, Liste, Tableau } = models;

module.exports = {

    creerListe: async (req, res, next) => {
        const { id } = req.params;
        const tableau = await models.Tableau.findOne({ where: { id } })

        const listeData = {
            tableauId: tableau.id,
            titre: req.body.titre,
            suivre: req.body.suivre,
        }

        if (!listeData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })
        }
        else {
            await models.Liste.create(listeData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },

    getListe: async (req, res, next) => {
        await models.Liste.findOne({
            where: {
                id: req.params.id
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
            .then(liste => {
                if (liste) {
                    res.json(liste)
                } else {
                    res.send("La liste n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    deleteListe: async (req, res, next) => {
        await models.Liste.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Liste supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },
    putListe: async (req, res, next) => {
        {
            const { id } = req.params;
            const listeData = {
                tableauId: req.body.tableauId,
                titre: req.body.titre,
                suivre: req.body.suivre,
            }
            if (!listeData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Liste.update(
                    listeData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Liste mise à jour!' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    },
    userTableauListe: async (req, res) => {
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
                    ], include: [
                        {
                            model: Liste,
                            as: "Listes",
                            attributes: [
                                "id",
                                "titre"
                            ]
                        },
                    ],
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