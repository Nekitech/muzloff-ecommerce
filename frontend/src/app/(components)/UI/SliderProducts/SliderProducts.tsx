import React, {FC, useEffect, useState} from 'react';
import styles from './SliderProducts.module.scss';
import CardProduct from "@/app/(components)/UI/CardProduct/CardProduct";
// @ts-ignore
import Slider from 'react-slick'

import {ProductService} from "@/service/product.service";
export interface SliderProductsProps {

}


const SliderProducts: FC<SliderProductsProps> = () => {
    const [sliderInfo, setSliderInfo] = useState([]);

    useEffect( () => {
        (async function () {
            const {data, error, loading} = await ProductService.getAllProducts();
            setSliderInfo(data.getAllProducts)
        })()
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };


    return (
        <div className={styles.sliderProducts}>
            <Slider {...settings}>
                {
                    sliderInfo?.map((data: any) => {
                        return (
                            <CardProduct key={data?.id_product} data={data}/>
                        )
                    })
                }
            </Slider>
        </div>

    )
};

export default SliderProducts;
