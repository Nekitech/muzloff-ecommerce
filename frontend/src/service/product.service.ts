import client from "@/apollo/ApolloClient";
import {gql} from "@apollo/client";
import {IProductInput} from "@/interfaces/product.interface";

export const ProductService = {
    async getAllProducts() {
        return await client.query({
            query: gql`
                query {
                    getAllProducts {
                        id_product,
                        type_instrument,
                        type_product,
                        name,
                        cost,
                        brand,
                        countStock, 
                        images
                    }
                }
            `
        });
    },
    async getProduct(id: number) {
        return await client.query({
            query: gql`
                query Product($id: ID){
                    getProduct(id: $id) {
                        id_product,
                        type_instrument,
                        type_product,
                        name,
                        cost,
                        brand,
                        countStock,
                        images
                    }
                }
            `, variables: {
                id: id
            },
        });
    },
    async addProduct({type_product, type_instrument, name, cost, brand, images}: IProductInput) {
        return await client.mutate({
            mutation: gql`
                mutation Product($type_instrument: String,  
                    $type_product: String,
                    $name: String,
                    $cost: Int,
                    $brand: String,
                    $images: [String]) {

                    addProduct(input: {
                        type_instrument: $type_instrument,
                        type_product: $type_product,
                        name: $name,
                        cost: $cost,
                        brand: $brand,
                        images: $images
                    }) {
                        type_instrument,
                        type_product,
                        name,
                        cost,
                        brand,
                        images
                    }

                }
            `, variables: {
                type_product,
                type_instrument,
                name,
                cost: Number(cost),
                brand,
                images
            },
        });
    },

}