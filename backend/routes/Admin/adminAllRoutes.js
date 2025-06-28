import express  from 'express'
import { postProduct, deleteProduct, editProduct } from '../../controllers/Admin/Product.js'
const router = express.Router()
router.post('/postProduct', postProduct) 
router.delete('/deleteProduct/:id', deleteProduct) 
router.patch('/edit/:id', editProduct)

export default router