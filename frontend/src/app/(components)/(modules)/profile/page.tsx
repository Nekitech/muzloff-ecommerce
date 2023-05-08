"use client"
import React, {FC, ReactNode, useEffect, useState} from 'react';
import styles from './page.module.scss';
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import classNames from "classnames";
import {ProductService} from "@/service/user.service";
import {IUserInfo} from "@/interfaces/user.interface";
import WithAuth from "@/HOC/WithAuth";


export interface ProfileProps {
    children: ReactNode,
}

const Profile: FC<ProfileProps> = ({children}) => {
    const path = usePathname();
    const [user, setUser] = useState<IUserInfo>();


    useEffect(() => {
        (async function () {
            const {data} = await ProductService.getUser();
            if (data) {
                const {email, name, phone_number, role_id} = data.getUser;

                setUser({
                    email, name, phone_number, role_id
                })

            }
        })()
    }, []);

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
                        })}>Мои данные
                        </li>
                    </Link>
                    <Link href={'/profile/addProduct'}>
                        <li className={classNames(styles.profile__navTabs__tab, {
                            [styles.profile__activeTab]: path === '/profile/addProduct'
                        })}>Выставить товар на продажу
                        </li>
                    </Link>
                    <Link href={'/profile/userProducts'}>
                        <li className={classNames(styles.profile__navTabs__tab, {
                            [styles.profile__activeTab]: path === '/profile/userProducts'
                        })}>Выставленные товары
                        </li>
                    </Link>
                </ul>
                <div className={styles.profile__wrapper}>
                    {
                        (children) ?
                            children
                            : <div className={styles.profile__userInfo}>
                                <input type="text" disabled={true} value={user?.name}/>
                                <input type="text" disabled={true} value={user?.phone_number}/>
                                <input type="text" disabled={true} value={user?.email}/>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
};

// @ts-ignore
export default WithAuth(Profile);
