const models = require('../models');

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
        const { id } = req.params;
        const tableau = await models.Tableau.findOne({ where: { id } })
        await models.Liste.findAll({
            where: {
                tableauId: tableau.id
            },
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
    }

}