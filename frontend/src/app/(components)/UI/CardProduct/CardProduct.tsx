import React, {FC} from 'react';
import styles from './CardProduct.module.scss';
import Image from "next/image";
import useImage from "@/hooks/useImage";

export interface CardProductProps {
    nameImage: string,
    data: any
}

const CardProduct: FC<CardProductProps> = ({nameImage, data}) => {
    const {image, error, loading} = useImage(nameImage);
    return (
        <div className={styles.cardProduct}>
            <div className={styles.cardProduct__wrapper}>
                {
                    !loading && <Image width={100} height={100} src={image} alt={'icon'}/>
                }
                <div className={styles.cardProduct__fav}>
                    <Image width={22} height={19} src={'assets/images/favIcon.svg'} alt={'icon'}/>
                </div>
                <div className={styles.cardProduct__descr}>
                    <h3 className={styles.cardProduct__descr__title}>{data.name}</h3>
                    <div className={styles.cardProduct__descr__info}>
                        <div className={styles.cardProduct__descr__cost}>{data.cost}</div>
                        <button className={styles.cardProduct__descr__cartBtn}>
                            <Image width={23} height={20} src={'assets/images/cartIcon.svg'} alt={'icon'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default CardProduct;
