import express from 'express'
import { AdminSignup } from '../../controllers/Admin/AdminSignup.js'
const router = express.Router()

router.post('/adminSignup',AdminSignup)