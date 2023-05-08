import jwt from 'jsonwebtoken'
import {secret_key} from "../config/config.js";

export const generateWebToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret_key, {
        expiresIn: "24h"
    })
}