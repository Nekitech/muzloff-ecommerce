import Router from 'express'
import PersonController from "../controller/models.js";


const router = new Router()
router.post('/user', PersonController.createUser)
router.get('/user', PersonController.getAllUser)

export default router