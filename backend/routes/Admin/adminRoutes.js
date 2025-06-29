import express from 'express'
import { AdminSignup,AdminLogin, logout } from '../../controllers/Admin/AdminController.js'
import { rateLimiter } from '../../midlewares/rateLimiter.js'
import { Validation } from '../../midlewares/Validation.js'
const router = express.Router()

router.post('/adminSignup',AdminSignup)
router.post('/adminLogin', Validation,rateLimiter,AdminLogin)
router.post('/adminlogout',logout)



export default router
