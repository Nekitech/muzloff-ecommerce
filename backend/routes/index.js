import {Router} from 'express'
import {default as uploadImagesRouter} from "./upload.js";


const router = new Router();


router.use('/images', uploadImagesRouter)

export default router