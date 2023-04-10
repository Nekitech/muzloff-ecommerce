import {PersonalController} from "../controller/models.js";
import {getPathFile} from "../helpers/nodeHelpers.js";


export const root = {
    getAllUser: () => {
        return PersonalController.getAllUser()
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getUser: ({id}) => {
        return PersonalController.getUser(id).then(res => res)
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
    createUser: ({input}) => {
        return PersonalController.createUser(input)
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
    deleteUser: ({input}) => {
        return PersonalController.deleteUser(input)
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getAllProductsCart: ({id}) => {
        return PersonalController.getAllProductsCart(id).then(res => res)
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getAllProducts: () => {
        return PersonalController.getAllProducts()
            .catch(err => console.log('Throw error in controllers - ', getPathFile(import.meta.url), `\n ${err}`))
    },
}