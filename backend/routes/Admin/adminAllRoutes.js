import express  from 'express'
import { postProduct, deleteProduct, editProduct, countProduct } from '../../controllers/Admin/Product.js'
const router = express.Router()
router.post('/postProduct', postProduct) 
router.delete('/deleteProduct/:id', deleteProduct) 
router.patch('/edit/:id', editProduct)
router.get('/count', countProduct)
export default router