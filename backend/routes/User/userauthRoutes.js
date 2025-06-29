import express from 'express'
import { logout, UserLogin , UserSignup} from '../../controllers/user/Auth.js'
import { rateLimiter } from '../../midlewares/rateLimiter.js'
import { Validation } from '../../midlewares/Validation.js'

const router = express.Router()

router.post('/userSignup',UserSignup)
router.post('/userLogin', Validation ,rateLimiter,UserLogin)
router.post('/logout',logout)

export default router