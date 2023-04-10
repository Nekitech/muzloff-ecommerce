import React, {FC, useState} from 'react';
import styles from './SliderProducts.module.scss';
import CardProduct from "@/app/(components)/UI/CardProduct/CardProduct";
// @ts-ignore
import Slider from 'react-slick'
import client from "@/apollo/ApolloClient";
import {gql} from "@apollo/client";
export interface SliderProductsProps {

}

const SliderProducts: FC<SliderProductsProps> = () => {
    const [sliderInfo, setSliderInfo] = useState([]);

    const getAllProducts = async () => {
        return await client.query({
            query: gql`
                query {
                    getAllProducts {
                        id_product,
                        type_instrument,
                        type_product,
                        name,
                        cost,
                        manufacturer,
                        countStock
                    }
                }
            `,
        });
    }
    getAllProducts().then(res => {
        const {data, error, loading} = res;
        setSliderInfo(data.getAllProducts)
    })

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };


    return (
        <div className={styles.sliderProducts}>
            <Slider {...settings}>
                {
                    sliderInfo?.map((data: any) => {
                        return (
                            <CardProduct key={data?.id_product} data={data} nameImage={'logo'}/>
                        )
                    })
                }
            </Slider>
        </div>

    )
};

export default SliderProducts;
