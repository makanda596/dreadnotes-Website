import express from 'express'
import { getCart, getProducts, OneProduct } from '../../controllers/user/UserController.js'

const router = express.Router()

router.get('/getProducts',getProducts)
router.get('/oneProduct/:id',OneProduct)
router.get('/getCart',getCart)
export default router 