import { metoda } from '../models/Metoda.js'
import { databaseSIRS } from '../config/Database.js'

export const getMetoda = (req, res) => {
    metoda.findAll({
        attributes: ['id','no','nama'],
        where: {
            rl_id: req.query.rlid
        }

    })
    .then((results) => {
        res.status(200).send({
            status: true,
            message: "data found",
            data: results
        })
    })
    .catch((err) => {
        res.status(422).send({
            status: false,
            message: err
        })
        return
    })
}