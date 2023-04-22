import React, {FC} from 'react';
import styles from './Catalog.module.scss';
import Image from "next/image";
import Link from "next/link";

export interface CatalogProps {
}

const Catalog: FC<CatalogProps> = () => {
    return (
        <div className={styles.catalog} data-testid="TemplateName">
            <Link href={{
                pathname: "/catalog",
            }} >
                <button className={styles.catalog__btn}>
                    <Image width={15} height={12} src={'assets/images/catalogBtnIcon.svg'} alt={'icon'}/>
                    Каталог
                </button>
            </Link>
        </div>

    )
};

export default Catalog;
