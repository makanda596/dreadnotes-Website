import express from 'express'
import { AdminSignup,AdminLogin, logout } from '../../controllers/Admin/AdminController.js'
import { rateLimiter } from '../../midlewares/rateLimiter.js'
import { AdminValidation } from '../../midlewares/AdminValidation.js'
import { postProduct } from '../../controllers/Admin/PostProduct.js'
const router = express.Router()

router.post('/adminSignup',AdminSignup)
router.post('/adminLogin',AdminValidation,rateLimiter,AdminLogin)
router.post('/adminlogout',logout)
router.post('/postProduct', postProduct)


export default router
