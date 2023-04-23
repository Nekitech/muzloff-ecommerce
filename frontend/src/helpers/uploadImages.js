import axios from "axios";

export const uploadImages = async (files) => {
    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
        formData.append('image', files[i])
    }

    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const {data} = await axios.post('http://localhost:3001/api/images/upload', formData, config);

    } catch (error) {
        console.error(error)
    }
}