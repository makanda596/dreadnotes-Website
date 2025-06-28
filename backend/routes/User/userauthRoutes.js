import express from 'express'
import { UserLogin } from '../../controllers/user/Auth.js'

const router = express.Router()

router.post('/userLogin',UserLogin)

export default router