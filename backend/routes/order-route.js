import express from 'express'
import OrderController from '../controllers/order.controller.js'

const router = express.Router()

router.post('/purchase', OrderController.purchaseOrder)

export default router
