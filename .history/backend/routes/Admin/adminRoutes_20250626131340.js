import express from 'express'
import { AdminSignup,AdminLogin, logout } from '../../controllers/Admin/AdminController.js'
const router = express.Router()

router.post('/adminSignup',AdminSignup)
router.post('/adminLogin',AdminLogin)
router.post('/adminlogout',logout)

export default router