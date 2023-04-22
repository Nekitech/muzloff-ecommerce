import {PersonController} from "../controller/User.model.js";
import {getPathFile} from "../helpers/nodeHelpers.js";
import {ProductController} from "../controller/Product.model.js";


export const root = {
    getAllUser: () => {
        return PersonController.getAllUser()
            .catch(err => console.log('Throw error in controllers - getAllUser ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getUser: ({id}) => {
        return PersonController.getUser(id).then(res => res)
            .catch(err => console.log('Throw error in controllers - getUser ', getPathFile(import.meta.url), `\n ${err}`))
    },
    createUser: ({input}) => {
        return PersonController.createUser(input)
            .catch(err => console.log('Throw error in controllers - createUser ', getPathFile(import.meta.url), `\n ${err}`))
    },
    deleteUser: ({input}) => {
        return PersonController.deleteUser(input)
            .catch(err => console.log('Throw error in controllers - deleteUser ', getPathFile(import.meta.url), `\n ${err}`))
    },

    getAllProductsCart: ({id}) => {
        return ProductController.getAllProductsCart(id).then(res => res)
            .catch(err => console.log('Throw error in controllers - getAllProductsCart ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getAllProducts: () => {
        return ProductController.getAllProducts()
            .catch(err => console.log('Throw error in controllers - getAllProducts ', getPathFile(import.meta.url), `\n ${err}`))
    },
    getProduct: ({id}) => {
        return ProductController.getProduct(id).then(res => res)
            .catch(err => console.log('Throw error in controllers - getProduct ', getPathFile(import.meta.url), `\n ${err}`))
    }
}