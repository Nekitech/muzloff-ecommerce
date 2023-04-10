import React, {FC} from 'react';
import styles from './Header.module.scss';
import Search from "@/app/(components)/UI/Search/Search";
import Image from "next/image";
import Catalog from "@/app/(components)/UI/Catalog/Catalog";

export interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.header} data-testid="Header">
            <div className={'container'}>
                <div className={styles.header__wrapper}>
                    <Image width={60} height={60} src={'assets/images/logo.svg'} alt={'logo'} />
                    <Catalog/>
                    <Search/>
                </div>
            </div>
        </div>

    )
};

export default Header;
