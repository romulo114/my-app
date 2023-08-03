import express from 'express'
import OrderController from '../controllers/order.controller.js'
import multer from 'multer'

const router = express.Router()
const upload = multer({ dest: 'uploads/' });

router.post('/purchase', upload.single('file'), OrderController.purchaseOrder)
router.get('/list', OrderController.showAllOrders)

export default router
