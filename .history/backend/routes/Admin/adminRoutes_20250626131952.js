import express from 'express'
import { AdminSignup,AdminLogin, logout } from '../../controllers/Admin/AdminController.js'
import { rateLimiter } from '../../midlewares/rateLimiter.js'
const router = express.Router()

router.post('/adminSignup',AdminSignup)
router.post('/adminLogin',rateLimiter,AdminLogin)
router.post('/adminlogout',logout)

export default router
