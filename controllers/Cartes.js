const models = require('../models');

module.exports = {

    creerCarte: async (req, res, next) => {
        const { id } = req.params;
        const liste = await models.Liste.findOne({ where: { id } })
        const carteData = {
            listeId: liste.id,
            nom: req.body.nom,
            description: req.body.description,
            activite: req.body.activite,
            date_debut: req.body.date_debut,
            date_limite: req.body.date_limite,
            piece: req.body.piece,
        }
        if (!carteData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })
        }
        else {
            await models.Carte.create(carteData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },

    getCarte: async (req, res, next) => {
        const { id } = req.params;
        const liste = await models.Liste.findOne({ where: { id } })
        await models.Carte.findAll({
            where: {
                listeId: liste.id
            },
        })
            .then(liste => {
                if (liste) {
                    res.json(liste)
                } else {
                    res.send("La carte n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    deleteCarte: async (req, res, next) => {
        await models.Carte.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Carte supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },
    putCarte: async (req, res, next) => {
        {
            const { id } = req.params;
            const carteData = {
                nom: req.body.nom,
                description: req.body.description,
                activite: req.body.activite,
                date_debut: req.body.date_debut,
                date_limite: req.body.date_limite,
                piece: req.body.piece,
            }
            if (!carteData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Carte.update(
                    carteData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Carte mise à jour!' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    }

}