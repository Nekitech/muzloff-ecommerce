import multer from 'multer'

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const typesImages = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg']

const fileFilter = (req, file, cb) => {
    if (typesImages.includes(file.mimeType)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export default multer({
    storage
})