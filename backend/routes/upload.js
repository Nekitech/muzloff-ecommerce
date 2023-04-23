import {Router} from "express";
import {default as uploadImages} from '../middleware/uploadImages.js'

const router = new Router();


router.post('/upload', uploadImages.array('image', 10), (req, res) => {
    try {
        console.log('приветули')
    }
    catch (error) {
        console.log(error)
    }
})

export default router