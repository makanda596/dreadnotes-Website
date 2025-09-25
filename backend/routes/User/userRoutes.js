import express from 'express'
import { getCart, getProducts, OneProduct, 
    AddToCart, CountCart, makeOrder, countOrder, getOrder,
    cancelOrder } from '../../controllers/user/UserController.js'
import { makeReview } from '../../controllers/user/ReviewsController.js'

const router = express.Router()

router.get('/getCart',getCart) 
router.post('/addCart/:productId', AddToCart)
router.get('/getCart',getCart)
router.get('/countCart', CountCart)
router.post('/makeOrder/:productId',makeOrder)
router.get('/countOrder', countOrder)
router.get('/getOrder', getOrder)
router.post('/cancelOrder/:orderId', cancelOrder)
router.post("/makeReview/:orderId", makeReview)
export default router 