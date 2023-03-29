import { jenisKegiatan } from '../models/JenisKegiatan.js'
import { databaseSIRS } from '../config/Database.js'
import { jenisGroupKegiatanHeader } from '../models/RLTigaTitikTujuh.js'

export const getDataJenisKegiatan = (req, res) => {
    jenisKegiatan.findAll({
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
export const getDataGroupJenisKegiatan = (req, res) => {
    jenisKegiatan.findAll({
        attributes: ['id', 'no', 'nama'],
        where: {
            rl_id: req.query.rlid
        },
        include: {
            model: jenisGroupKegiatanHeader,
            
            
            required: false
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