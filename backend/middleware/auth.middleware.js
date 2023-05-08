import jwt from "jsonwebtoken";
import {secret_key} from "../config/config.js";

export const auth = async (resolve, root, args, context, info) => {
    try {
        const token = context.headers.authorization.split(' ')[1];
        if(token) {
            const payload = jwt.verify(token, secret_key);

            return await resolve(root, {...args, id: payload.id}, context, info)

        }

    }
    catch (e) {
        console.log('error')
    }

}