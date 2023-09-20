// Auth routes
import { Router } from 'express'
import {
	getAllServices,
	newService,
	nlGetServices,
	nlNewService,
	subscribe,
	unsubscribe
} from '../../controllers/service.controller'

const router = Router()

router.get('/', getAllServices)
//nl
router.get("/nl",nlGetServices)
router.post("/nl",nlNewService)

router.post('/new', newService)
router.post('/subscribe', subscribe)
router.delete('/unsubscribe', unsubscribe)

export default router
