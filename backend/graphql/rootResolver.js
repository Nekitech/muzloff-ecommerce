import {PersonController} from "../controller/User.model.js";
import {getPathFile} from "../helpers/nodeHelpers.js";
import {ProductController} from "../controller/Product.model.js";
import {handlerErrorsResolvers} from "../error/handleErrors.js";


export const root = {
    getAllUser: () => {
        return PersonController.getAllUser()
            .catch(err => handlerErrorsResolvers(err, 'getAllUser'))
    },
    getUser: ({id}) => {
        return PersonController.getUser(id).then(res => res)
            .catch(err => handlerErrorsResolvers(err, 'getUser'))
    },
    createUser: ({input}) => {
        return PersonController.createUser(input)
            .catch(err => handlerErrorsResolvers(err, 'createUser'))
    },
    deleteUser: ({input}) => {
        return PersonController.deleteUser(input)
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
    addProduct: ({input}) => {
        return ProductController.addProduct(input)
            .catch(err => handlerErrorsResolvers(err, 'addProduct'))
    }
}