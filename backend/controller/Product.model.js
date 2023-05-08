import {connectDB} from "../database/connectDB.js";
import fs from "fs";
import path from "path";
import {deleteImages} from "../helpers/deleteImages.js";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

class ProductModel {
    nameTableCart = "cart";
    nameTableProducts = "products"

    getAllProductsCart = async (id) => {
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
        const {name, type_instrument, type_product, cost, images, brand, id} = req;
        const {rows: return_product} = await connectDB.query(`INSERT INTO ${this.nameTableProducts} 
                        (name, type_instrument, type_product, cost, brand, images, id_person) 
                        values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [name, type_instrument, type_product, cost, brand, images, id])
        return return_product[0]
    }
    deleteProduct = async (id) => {
        const {rows: deletedProduct} = await connectDB.query(`DELETE FROM ${this.nameTableProducts} WHERE id_product = $1 RETURNING *`, [id]);

        console.log(deletedProduct)
        deleteImages(path.dirname(__dirname) + "\\uploads\\images\\", deletedProduct[0].images)
        return deletedProduct[0];
    }
    getProductsByUser = async (id) => {
        const {rows: products} = await connectDB.query(`SELECT * FROM ${this.nameTableProducts} WHERE id_person = $1`, [id]);
        return products
    }
}

export const ProductController = new ProductModel();


