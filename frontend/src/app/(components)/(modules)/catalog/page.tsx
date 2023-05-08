"use client"
import React, {FC, useEffect, useState} from 'react';

import styles from './page.module.scss';

import CardProduct from "@/app/(components)/UI/CardProduct/CardProduct";
import DropdownCheckbox from "@/app/(components)/UI/DropdownCheckbox/DropdownCheckbox";
import {ProductService} from "@/service/product.service";
import {IProduct} from "@/interfaces/product.interface";
import SliderProducts from "@/app/(components)/UI/SliderProducts/SliderProducts";

const CatalogPage: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect( () => {
        (async function () {
            const {data, error, loading} = await ProductService.getAllProducts();
            setProducts(data.getAllProducts)
        })()
    }, [])

    const listTypeInstruments = products.map((product: any) => product?.type_instrument)
    const listBrands = products
        .filter((product: any) => product?.brand)
        .map((product: any) => product?.brand)

    return (
        <div className={styles.catalogPage} data-testid="CatalogPage">
            <div className={"container"}>
                <div className={styles.catalogPage__wrapper}>
                    <h1 className={styles.catalogPage__title}>Все товары</h1>

                    <div className={styles.catalogPage__block}>
                        <div className={styles.catalogPage__sidebar}>
                            <DropdownCheckbox nameDropdown={'Виды инструментов'} listParameters={listTypeInstruments}/>
                            <DropdownCheckbox nameDropdown={'Брэнды'} listParameters={listBrands}/>
                        </div>
                        <div className={styles.catalogPage__products}>
                            {
                                (products.length > 0) ?
                                products.map((product: IProduct) => {
                                    return <CardProduct key={product?.id_product}
                                                        data={product}/>
                                })
                                    : <p>Загрузка товаров...</p>
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
};


export default CatalogPage;
