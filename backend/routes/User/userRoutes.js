import express from 'express'
import { getCart, getProducts } from '../../controllers/user/UserController.js'

const router = express.Router()

router.get('/getProducts',getProducts)
router.get('/getCart',getCart)
export default router