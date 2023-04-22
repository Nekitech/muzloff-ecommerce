import client from "@/apollo/ApolloClient";
import {gql} from "@apollo/client";

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
                        countStock
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
                        countStock
                    }
                }
            `, variables: {
                id: id
            },
        });
    },

}