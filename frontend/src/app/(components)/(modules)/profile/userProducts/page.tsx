"use client"
import React, {FC, useEffect, useState} from 'react';
import styles from './page.module.scss';
import {IProduct} from "@/interfaces/product.interface";
import {ProductService} from "@/service/product.service";
import CardProduct from "@/app/(components)/UI/CardProduct/CardProduct";
import Profile from "@/app/(components)/(modules)/profile/page";

export interface UserProductsProps {
}

const UserProducts: FC<UserProductsProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect( () => {
        (async function () {
            const {data, error, loading} = await ProductService.getProductsByUser();
            setProducts(data.getProductsByUser)
        })()
    }, [])
    console.log(products)

    return (
        <Profile>

            <div className={styles.userProducts} data-testid="UserProducts">
                {
                    products?.map((data: any) => {
                        return (
                            <CardProduct key={data?.id_product} data={data}/>
                        )
                    })
                }
            </div>
        </Profile>

    )
};

export default UserProducts;
