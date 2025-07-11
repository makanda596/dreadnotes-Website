import express from 'express'
import { getCart, getProducts, OneProduct, 
    AddToCart, CountCart, makeOrder, countOrder, getOrder,
    getCart,
    cancelOrder } from '../../controllers/user/UserController.js'

const router = express.Router()

router.get('/getProducts',getProducts)
router.get('/oneProduct/:id',OneProduct)
router.get('/getCart',getCart) 
router.post('/addCart/:productId', AddToCart)
router.get('/getCart',getCart)
router.get('/countCart', CountCart)
router.post('/makeOrder/:productId',makeOrder)
router.get('/countOrder', countOrder)
router.get('/getOrder', getOrder)
router.post('/cancelOrder/:orderId', cancelOrder)
export default router 