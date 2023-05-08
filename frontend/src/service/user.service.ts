import {clientAuth} from "@/apollo/ApolloClient";
import {gql} from "@apollo/client";
import {IProductInput} from "@/interfaces/product.interface";

export const ProductService = {
    async getUser() {
        return await clientAuth.query({
            query: gql`
                query {
                    getUser {
                        name,
                        email,
                        role_id,
                        phone_number
                    }
                }
            `
        });
    },


}