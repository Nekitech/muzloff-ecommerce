import {connectDB} from "../database/connectDB.js";

class ProductModel {
    nameTableCart = "cart";
    nameTableProducts = "products"

    getAllProductsCart = async(id) => {
        const {rows: cart} = await connectDB.query(`SELECT * FROM ${this.nameTableCart}
                                                    INNER JOIN ${this.nameTableProducts} 
                                                    ON ${this.nameTableCart}.product_id = ${this.nameTableProducts}.id_product
                                                    WHERE person_id = $1`, [id]);
        return cart
    }
    getAllProducts = async () => {
        const {rows: users} = await connectDB.query(`SELECT * FROM ${this.nameTableProducts}`);
        return users
    }
    getProduct = async (id) => {
        const {rows: product} = await connectDB.query(`SELECT * FROM ${this.nameTableProducts} WHERE id_product = $1`, [id]);
        return product[0]
    }

    addProduct = async (req) => {
        const {name, type_instrument, type_product, cost, images, brand} = req;
        const {rows: return_product} = await connectDB.query(`INSERT INTO ${this.nameTableProducts} 
                        (name, type_instrument, type_product, cost, brand, images) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, type_instrument, type_product, cost, brand, images])
        return return_product[0]
    }
}

export const ProductController =  new ProductModel();


