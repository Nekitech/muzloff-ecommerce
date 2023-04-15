import React, {FC} from 'react';
import styles from './Catalog.module.scss';
import Image from "next/image";

export interface CatalogProps {
}

const Catalog: FC<CatalogProps> = () => {
    return (
        <div className={styles.catalog} data-testid="TemplateName">
            <button className={styles.catalog__btn}>
                <Image width={15} height={12} src={'assets/images/catalogBtnIcon.svg'} alt={'icon'}/>
                Каталог
            </button>
        </div>

    )
};

export default Catalog;
