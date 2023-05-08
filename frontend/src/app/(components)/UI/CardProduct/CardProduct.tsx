import React, {FC} from 'react';
import styles from './CardProduct.module.scss';
import Image from "next/image";
import useImage from "@/hooks/useImage";
import Link from "next/link";
import {urlServer} from "@/apollo/ApolloClient";

export interface CardProductProps {
    data: any
}

const CardProduct: FC<CardProductProps> = ({ data}) => {
    // const {image, error, loading} = useImage(nameImage);

    return (
        <div className={styles.cardProduct}>
            <div className={styles.cardProduct__wrapper}>
                <Link href={`/catalog/${data.id_product}`}>
                    {
                        <Image className={styles.cardProduct__img} width={220} height={230}
                                           src={`${urlServer}/uploads/${(data.images) ? data?.images[0] : 'guitar.png'}`} alt={'icon'}/>
                    }
                </Link>

                <div className={styles.cardProduct__fav}>
                    <Image width={22} height={19} src={'/assets/images/favIcon.svg'} alt={'icon'}/>
                </div>
                <div className={styles.cardProduct__descr}>
                    <h3 className={styles.cardProduct__descr__title}>{data.name}</h3>
                    <div className={styles.cardProduct__descr__info}>
                        <div className={styles.cardProduct__descr__cost}>{data.cost + ' руб.'}</div>
                        <button className={styles.cardProduct__descr__cartBtn}>
                            <Image width={23} height={20} src={'/assets/images/cartIcon.svg'} alt={'icon'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default CardProduct;
