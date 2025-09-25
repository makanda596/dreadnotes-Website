import express from 'express'
import { checkAuth, logout, profile, UserLogin , UserSignup} from '../../controllers/user/Auth.js'
import { rateLimiter } from '../../midlewares/rateLimiter.js'
import { Validation } from '../../midlewares/Validation.js'
import { UserVerifyToken } from '../../midlewares/UserVerifyToken.js'
import { getProducts, OneProduct } from '../../controllers/user/UserController.js'

const router = express.Router()

router.post('/userSignup',UserSignup)
router.post('/userLogin', Validation ,rateLimiter,UserLogin)
router.post('/logout',logout)
router.get('/check-auth', UserVerifyToken, checkAuth)
router.get('/profile', UserVerifyToken, profile)
router.get('/getProducts',getProducts)
router.get('/oneProduct/:id',OneProduct)


export default router