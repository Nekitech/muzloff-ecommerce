import fs from "fs";

export const deleteImages = (path, images) => {

    let regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
    console.log(images, fs.readdirSync(path).filter(f => regex.test(f)))
    fs.readdirSync(path)
        .filter(f => regex.test(f))
        .filter(img => images.includes(img))
        .map(f => fs.unlinkSync(path + f))
}