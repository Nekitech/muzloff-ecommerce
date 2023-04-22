import React, {FC} from 'react';
import styles from './Header.module.scss';
import Search from "@/app/(components)/UI/Search/Search";
import Image from "next/image";
import Catalog from "@/app/(components)/UI/Catalog/Catalog";
import Link from "next/link";

export interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.header} data-testid="Header">
            <div className={'container'}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__menu}>
                        <Link href={"/home"}>
                            <Image width={60} height={60} src={'assets/images/logo.svg'} alt={'logo'} />
                        </Link>
                        <Catalog/>
                        <Search/>
                    </div>
                    <div className={styles.header__navUser}>
                        <Link href={'#'} className={styles.header__navUser__item}>
                            <Image width={22} height={19} src={'assets/images/favIcon.svg'} alt={'icon'}/>
                            <p>{'Избранное'}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Header;
