import {getPathFile} from "../helpers/nodeHelpers.js";

export const handlerErrorsResolvers = (err, nameResolver) => {
    console.log(`Throw error in controllers - ${nameResolver} `, getPathFile(import.meta.url), `\n ${err}`)
}