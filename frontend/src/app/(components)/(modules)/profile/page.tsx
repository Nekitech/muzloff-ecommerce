"use client"
import React, {FC, ReactNode} from 'react';
import styles from './page.module.scss';
import Link from "next/link";
import {usePathname} from "next/navigation";
import classNames from "classnames";


export interface ProfileProps {
    children: ReactNode,
}

const Profile: FC<ProfileProps> = ({children}) => {
    const path = usePathname()

    return (
        <div className={styles.profile} data-testid="Profile">
            <div className={'container'}>
                <h1 className={styles.profile__title}>Личный кабинет</h1>
                <ul className={styles.profile__navTabs}>
                    {/*<Link href={'/profile/infoProducts'}>*/}
                    {/*    <li className={classNames(styles.profile__navTabs__tab, {*/}
                    {/*        [styles.profile__activeTab]: path === '/profile/infoProducts'*/}
                    {/*    })}>Информация о заказах</li>*/}
                    {/*</Link>*/}
                    {/*<Link href={'/profile/purchasedProducts'}>*/}
                    {/*    <li className={classNames(styles.profile__navTabs__tab, {*/}
                    {/*        [styles.profile__activeTab]: path === '/profile/purchasedProducts'*/}
                    {/*    })}>Купленные товары</li>*/}
                    {/*</Link>*/}
                    <Link href={'/profile'}>
                        <li className={classNames(styles.profile__navTabs__tab, {
                            [styles.profile__activeTab]: path === '/profile'
                        })}>Мои данные</li>
                    </Link>
                    <Link href={'/profile/addProduct'}>
                        <li className={classNames(styles.profile__navTabs__tab, {
                            [styles.profile__activeTab]: path === '/profile/addProduct'
                        })}>Выставить товар на продажу</li>
                    </Link>
                </ul>
                <div className={styles.profile__wrapper}>
                    {
                        (children) ?
                            children
                            : <div>
                                user data
                            </div>
                    }
                </div>
            </div>
        </div>

    )
};

// @ts-ignore
export default Profile;
