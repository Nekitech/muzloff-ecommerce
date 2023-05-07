import {Router} from "express";
import {default as uploadImages} from '../middleware/uploadImages.js'

const uploadImagesRouter = new Router();

uploadImagesRouter.post('/upload', uploadImages.array('image', 10), (req, res) => {
    try {
        console.log('Фотографии загружены');

    }
    catch (error) {
        console.log(error)
    }
})

export default uploadImagesRouter