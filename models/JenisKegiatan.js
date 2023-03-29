import { DataTypes, QueryTypes } from "sequelize"
import { databaseSIRS }  from "../config/Database.js"

export const jenisKegiatan = databaseSIRS.define('jenis_kegiatan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rl_id: {
        type: DataTypes.INTEGER     
    },
    no: {
        type: DataTypes.INTEGER
    },
    nama: {
        type: DataTypes.STRING
    },
   
    group_jenis_kegiatan_id: {
        type: DataTypes.INTEGER     
    },
}, {
    freezeTableName: true
})

export const jenisGroupKegiatanHeader = databaseSIRS.define('group_jenis_kegiatan_header', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    
    nama: {
        type: DataTypes.STRING
    },
    
    no: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

jenisGroupKegiatanHeader.hasMany(jenisKegiatan, {foreignKey: 'id'})
jenisKegiatan.belongsTo(jenisGroupKegiatanHeader, {foreignKey: 'group_jenis_kegiatan_id'})