import express from 'express'
import { getDataUser, insertDataUser, login, loginadmin, logout, logoutadmin } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

import { getDataJenisPelayanan } from '../controllers/JenisPelayananController.js'
import { getDataJenisSpesialis } from '../controllers/JenisSpesialisController.js'
import { getDataJenisTindakan, getDataGroupJenisTindakan } from '../controllers/JenisGroupTindakanController.js'
import { getDataRumahSakit, getDataRumahSakitFilterbyKabKotaId } from '../controllers/RumahSakitController.js'
import { getDataJenisGolonganSebabPenyakit, getDataJenisGolonganSebabPenyakitB, getDataJenisGolonganSebabPenyakitBId } from '../controllers/JenisGolonganSebabPenyakitController.js'
import {  getDataJenisGolonganPenyakitB,  getDataJenisGolonganPenyakitBId} from '../controllers/JenisGolonganPenyakitController.js'

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

router.get('/apisirs/jenisgolongansebabpenyakit', verifyToken, getDataJenisGolonganSebabPenyakit)


// DINKES PROVINSI
router.post('/apisirsadmin/login', loginadmin)
router.delete('/apisirsadmin/logout', logoutadmin)
router.get('/apisirsadmin/token', refreshToken)

// Get Data Dinkes
router.get('/apisirs/apisirsadmin/:id', verifyToken, getDataRumahSakit)

// GET DATA KAB KOTA
router.get('/apisirsadmin/kabkota', verifyToken, getDataKabKota)

// GET DATA KABKOTA DINKES KAB
router.get('/apisirsadmin/kabkotaid', verifyToken, getDataKabKotabyID)

// GET DATA RS BY KAB KOTA
router.get('/apisirsadmin/rumahsakit/:kabkotaid', verifyToken, getDataRumahSakitFilterbyKabKotaId)

// DINKES KAB/KOTA


// GET DATA
router.get('/apisirsadmin/rltigatitiktujuh', verifyToken, getDataRLTigaTitikTujuhKodeRSTahun)
router.get('/apisirsadmin/rltigatitikduabelas', verifyToken, getDataRLTigaTitikDuaBelasKodeRSTahun)
router.get('/apisirsadmin/rltigatitiktigabelasa', verifyToken, getDataRLTigaTitikTigaBelasAKodeRSTahun)
router.get('/apisirsadmin/rltigatitiktigabelasb', verifyToken, getDataRLTigaTitikTigaBelasBKodeRSTahun)
router.get('/apisirsadmin/rllimatitikempat', verifyToken, getDataRLLimaTitikEmpatKodeRSTahun)

// Validasi Data
router.get('/apisirsadmin/validasi', verifyToken, getDataValidasiByRsId)
router.post('/apisirsadmin/validasi', verifyToken, insertValidasi)
router.patch('/apisirsadmin/validasi/:id', verifyToken, updateValidasi)
router.get('/apisirsadmin/statusvalidasi',  getStatusValidasi)
export default router