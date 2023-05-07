import React, {FC} from 'react';
import styles from './ProductsByTypes.module.scss';
import Image from "next/image";

export interface ProductsByTypesProps {
}

const ProductsByTypes: FC<ProductsByTypesProps> = () => {
    return (
        <div className={styles.productsByTypes} data-testid="ProductsByTypes">
            <h3 className={styles.productsByTypes__name}>Инструменты по видам</h3>
            <div className={styles.productsByTypes__wrapper}>
                <ul className={styles.productsByTypes__typesInstrument}>
                    <Image className={styles.productsByTypes__typesInstrument__icon} width={'65'} height={'65'} src={'/assets/images/guitarIcon.svg'} alt={'icon'}/>
                    <h4 className={styles.productsByTypes__typesInstrument__title}>Струнные</h4>

                    <li className={styles.productsByTypes__typesInstrument__item}>Классические гитары</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Акустические гитары</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Акустические бас-гитары</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Электрогитары</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Бас-гитары</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Укулеле</li>
                </ul>

                <ul className={styles.productsByTypes__typesInstrument}>
                    <Image className={styles.productsByTypes__typesInstrument__icon} width={'65'} height={'65'} src={'/assets/images/synthesizerIcon.svg'} alt={'icon'}/>
                    <h4 className={styles.productsByTypes__typesInstrument__title}>Клавишные</h4>

                    <li className={styles.productsByTypes__typesInstrument__item}>Синтезаторы</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Цифровые пианино</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Цифровые органы</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Акустические клавишные</li>
                </ul>

                <ul className={styles.productsByTypes__typesInstrument}>
                    <Image className={styles.productsByTypes__typesInstrument__icon} width={'65'} height={'65'} src={'/assets/images/drumIcon.svg'} alt={'icon'}/>
                    <h4 className={styles.productsByTypes__typesInstrument__title}>Ударные</h4>

                    <li className={styles.productsByTypes__typesInstrument__item}>Акустические ударные</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Электронные ударные</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Тарелки</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Стойки</li>
                </ul>

                <ul className={styles.productsByTypes__typesInstrument}>
                    <Image className={styles.productsByTypes__typesInstrument__icon} width={'65'} height={'65'} src={'/assets/images/saxophoneIcon.svg'} alt={'icon'}/>
                    <h4 className={styles.productsByTypes__typesInstrument__title}>Духовые</h4>

                    <li className={styles.productsByTypes__typesInstrument__item}>Блок-флейты</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Флейты</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Саксофоны</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Кларнеты</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Трубы</li>
                    <li className={styles.productsByTypes__typesInstrument__item}>Тромбоны</li>
                </ul>

            </div>
        </div>

    )
};

export default ProductsByTypes;
