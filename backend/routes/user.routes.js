import Router from 'express'
import PersonController from "../controller/models.js";


const router = new Router()
router.post('/user', PersonController.createUser)
router.get('/user/', PersonController.getAllUser)
router.get('/user/:id', PersonController.getUser)
router.delete('/user/:id', PersonController.deleteUser)

export default router