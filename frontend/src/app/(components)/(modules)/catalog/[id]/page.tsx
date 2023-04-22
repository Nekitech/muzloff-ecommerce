"use client"
import React, {FC, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {ProductService} from "@/service/product.service";
import styles from './page.module.scss'
import {IProduct} from "@/interfaces/product.interface";

interface IProductPageProps {
    params: {
        id: number
    }
}
const Page: FC<IProductPageProps> = ({params}) => {

    const [product, setProduct] = useState<IProduct | null>(null);
    const router = useRouter()

    useEffect( () => {
        (async function () {
            const {data, error, loading} = await ProductService.getProduct(params.id);
            if(!data.getProduct) router.replace('/404')
            setProduct(data.getProduct)
        })()
    }, [])
    return (
        <div className={styles.productPage}>
            <div className={'container'}>
                <h1 className={styles.productPage__title}>{product?.name}</h1>
            </div>
        </div>
    );
};

export default Page;
