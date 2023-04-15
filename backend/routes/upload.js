import {Router} from "express";
import {default as uploadImages} from '../middleware/uploadImages.js'

const router = new Router();


router.post('/upload', uploadImages.single('image'))

export default router