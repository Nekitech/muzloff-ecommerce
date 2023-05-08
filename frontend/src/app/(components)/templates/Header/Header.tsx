"use client"
import React, {FC, useEffect, useState} from 'react';
import styles from './Header.module.scss';
import Search from "@/app/(components)/UI/Search/Search";
import Image from "next/image";
import Catalog from "@/app/(components)/UI/Catalog/Catalog";
import Link from "next/link";
import Overlay from "@/app/(components)/UI/Overlay/Overlay";
import PopupForm from "@/app/(components)/UI/PopupForm/PopupForm";
import {ProductService} from "@/service/user.service";
import {IUserInfo} from "@/interfaces/user.interface";

export interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {

    const [user, setUser] = useState<IUserInfo>();

    const [isOpenPopup, setIsOpenPopup] = useState({
        status: false,
        popup: 'auth'
    });

    const handleOpenPopup = (isOpen: boolean) => setIsOpenPopup({
        status: isOpen,
        popup: ''
    });

    useEffect(  () => {
        (async function () {
            const {data} = await ProductService.getUser();
            console.log(data)
            if(data.getUser) {
                const {email, name, phone_number, role_id} = data.getUser;

                setUser({
                    email, name, phone_number, role_id
                })

            }
        })()
    }, []);
    console.log(user)



    return (
        <>
            <div className={styles.header} data-testid="Header">
                <div className={'container'}>
                    <div className={styles.header__wrapper}>
                        <div className={styles.header__menu}>
                            <Link href={"/home"}>
                                <Image width={60} height={60} src={'assets/images/logo.svg'} alt={'logo'}/>
                            </Link>
                            <Catalog/>
                            <Search/>
                        </div>
                        <div className={styles.header__navUser}>
                            <Link href={'#'} className={styles.header__navUser__item}>
                                <Image width={22} height={19} src={'assets/images/favIcon.svg'} alt={'icon'}/>
                                <p>{'Избранное'}</p>
                            </Link>
                            {
                                (user) ?

                                    <Link href={'/profile'} className={styles.header__navUser__item}>
                                        <Image width={22} height={19} src={'assets/images/ProfileIcon.svg'}
                                               alt={'icon'}/>
                                        <p>{user?.name}</p>
                                    </Link>
                                    : <>

                                        <p onClick={() => setIsOpenPopup({
                                            status: true,
                                            popup: 'reg'
                                        })}>{'Регистрация'}</p>
                                        <p onClick={() => setIsOpenPopup({
                                            status: true,
                                            popup: 'auth'
                                        })}>{'Войти'}</p>

                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpenPopup.status &&
                <Overlay handleOpenPopup={handleOpenPopup}>
                    {
                        isOpenPopup.popup === 'reg' ?
                            <PopupForm typePopupForm={'reg'}/>
                            : <PopupForm typePopupForm={'auth'}/>
                    }
                </Overlay>
            }
        </>

    )
};

export default Header;
