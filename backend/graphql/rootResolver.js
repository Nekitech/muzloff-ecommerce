import {PersonController} from "../controller/User.model.js";
import {getPathFile} from "../helpers/nodeHelpers.js";
import {ProductController} from "../controller/Product.model.js";
import {handlerErrorsResolvers} from "../error/handleErrors.js";


export const root = {
    getAllUser: () => {
        return PersonController.getAllUser()
            .catch(err => handlerErrorsResolvers(err, 'getAllUser'))
    },

    createUser: ({input}) => {
        return PersonController.createUser(input)
            .catch(err => handlerErrorsResolvers(err, 'createUser'))
    },
    deleteUser: ({id}) => {
        return PersonController.deleteUser(id)
            .catch(err => handlerErrorsResolvers(err, 'deleteUser'))
    },

    getAllProductsCart: ({id}) => {
        return ProductController.getAllProductsCart(id).then(res => res)
            .catch(err => handlerErrorsResolvers(err, 'getAllProductsCart'))
    },
    getAllProducts: () => {
        return ProductController.getAllProducts()
            .catch(err => handlerErrorsResolvers(err, 'getAllProducts'))
    },
    getProduct: ({id}) => {
        return ProductController.getProduct(id).then(res => res)
            .catch(err => handlerErrorsResolvers(err, 'getProduct'))
    },

}

export const authRoot = {
    getUser: ({id}) => {
        return PersonController.getUser(id).then(res => res)
            .catch(err => handlerErrorsResolvers(err, 'getUser'))
    },
    addProduct: ({input, id}) => {
        return ProductController.addProduct({...input, id})
            .catch(err => handlerErrorsResolvers(err, 'addProduct'))
    },
    deleteProduct: ({id_product}) => {
        console.log(id_product)
        return ProductController.deleteProduct(id_product)
            .catch(err => handlerErrorsResolvers(err, 'deleteProduct'))
    },
    getProductsByUser: ({id}) => {
        return ProductController.getProductsByUser(id).then(res => res)
            .catch(err => handlerErrorsResolvers(err, 'getProductsByUser'))
    },
}