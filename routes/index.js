import express from 'express'
import { getDataUser, insertDataUser, login, loginadmin, logout, logoutadmin } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

import { getDataJenisPelayanan } from '../controllers/JenisPelayananController.js'
import { getDataJenisSpesialis } from '../controllers/JenisSpesialisController.js'
import { getDataJenisTindakan, getDataGroupJenisTindakan } from '../controllers/JenisGroupTindakanController.js'
import { getDataRumahSakit, getDataRumahSakitFilterbyKabKotaId } from '../controllers/RumahSakitController.js'

import { getDataKabKota, getDataKabKotabyID } from '../controllers/KabKotaController.js'

import {  getDataRLTigaTitikTujuhKodeRSTahun} from '../controllers/RLTigaTitikTujuhController.js'
import { getDataRLTigaTitikDuaBelasKodeRSTahun} from '../controllers/RLTigaTitikDuaBelasController.js'
import {  getDataRLTigaTitikTigaBelasAKodeRSTahun } from '../controllers/RLTigaTitikTigaBelasAController.js'
import {getDataRLTigaTitikTigaBelasBKodeRSTahun } from '../controllers/RLTigaTitikTigaBelasBController.js'
import { getDataRLLimaTitikEmpatKodeRSTahun } from '../controllers/RLLimaTitikEmpatController.js'
import { getDataValidasiByRsId, insertValidasi, updateValidasi , getStatusValidasi} from '../controllers/ValidasiController.js'

const router = express.Router()

// Rumah Sakit
router.get('/apisirs/rumahsakit/:id', verifyToken, getDataRumahSakit)

// User
router.get('/apisirs/users', verifyToken, getDataUser)
router.post('/apisirs/users', insertDataUser)

// Token
router.post('/apisirs/login', login)
router.delete('/apisirs/logout', logout)

router.get('/apisirs/token', refreshToken)

// Jenis Pelayanan RL 3.1
router.get('/apisirs/jenispelayanan', verifyToken,
    getDataJenisPelayanan)

router.get('/apisirs/jenisspesialis', verifyToken,
    getDataJenisSpesialis)

router.get('/apisirs/jenisgrouptindakan', verifyToken, getDataGroupJenisTindakan)

router.get('/apisirs/jenistindakan', verifyToken,
    getDataJenisTindakan)


// DINKES PROVINSI
router.post('/apisirs/loginadmin', loginadmin)
router.delete('/apisirs/logoutadmin', logoutadmin)
router.get('/apisirs/token', refreshToken)

// // Get Data Dinkes
// router.get('/apisirs/apisirs/:id', verifyToken, getDataRumahSakit)

// GET DATA KAB KOTA
router.get('/apisirs/kabkota', verifyToken, getDataKabKota)

// // GET DATA KABKOTA DINKES KAB
// router.get('/apisirs/kabkotaid', verifyToken, getDataKabKotabyID)

// GET DATA RS BY KAB KOTA
router.get('/apisirs/rumahsakit', verifyToken, getDataRumahSakitFilterbyKabKotaId)

// DINKES KAB/KOTA


// GET DATA
router.get('/apisirs/rltigatitiktujuhadmin', verifyToken, getDataRLTigaTitikTujuhKodeRSTahun)
router.get('/apisirs/rltigatitikduabelasadmin', verifyToken, getDataRLTigaTitikDuaBelasKodeRSTahun)
router.get('/apisirs/rltigatitiktigabelasaadmin', verifyToken, getDataRLTigaTitikTigaBelasAKodeRSTahun)
router.get('/apisirs/rltigatitiktigabelasbadmin', verifyToken, getDataRLTigaTitikTigaBelasBKodeRSTahun)
router.get('/apisirs/rllimatitikempatadmin', verifyToken, getDataRLLimaTitikEmpatKodeRSTahun)

// Validasi Data
router.get('/apisirs/validasi', verifyToken, getDataValidasiByRsId)
router.post('/apisirs/validasi', verifyToken, insertValidasi)
router.patch('/apisirs/validasi/:id', verifyToken, updateValidasi)
router.get('/apisirs/statusvalidasi',  getStatusValidasi)
export default router