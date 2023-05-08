import axios from "axios";
import {urlServer} from "@/apollo/ApolloClient";

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

        const {data} = await axios.post(`${urlServer}/api/upload`, formData, config);
        return data

    } catch (error) {
        console.error(error)
    }
}