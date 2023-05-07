import React, {FC} from 'react';
import styles from './PopupForm.module.scss';
import {useForm} from "react-hook-form";
import axios from "axios";
import {urlServer} from "@/apollo/ApolloClient";

export interface PopupFormProps {
    typePopupForm: string
}

const PopupForm: FC<PopupFormProps> = ({typePopupForm}) => {

    const {handleSubmit, register, reset} = useForm();

    const sendForm = async (data: any) => {
        console.log(data)
        const return_data = (typePopupForm === 'auth') ? await axios.post(`${urlServer}/auth`, {
            number: data.number,
            password: data.password

        }) : await axios.post(`${urlServer}/reg`, {
            ...data
        })

        if(return_data.status === 200) {
            alert(return_data.data)
            window.location.reload();
        }
        else {
            alert(return_data)
        }

    }

    return (
        <div className={styles.popupForm} data-testid="PopupForm" onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.popupForm__title}>{(typePopupForm === 'auth') ? 'Форма авторизации' : 'Форма регистрации'}</h2>
            <form action="" className={styles.popupForm__form} onSubmit={handleSubmit(sendForm)}>
                <div className={styles.popupForm__form__inputs}>
                    {
                        (typePopupForm === 'reg') &&
                        <>
                            <label>
                                Email
                                <input placeholder={'example@mail.ru'} type="email" {...register("email")}/>
                            </label>
                            <label>
                                Name
                                <input placeholder={'Введите ваше имя'} type="text" {...register("name")}/>
                            </label>
                        </>
                    }

                    <label>
                        Phone number
                        <input placeholder={'+79999999'} type="number" {...register("number")}/>
                    </label>
                    <label>
                        Password
                        <input placeholder={''} type="password" {...register("password")}/>
                    </label>
                    {
                        (typePopupForm === 'reg') &&
                        <label>
                            Repeat password
                            <input placeholder={''} type="password" {...register("password")}/>
                        </label>
                    }

                </div>
                <button className={styles.popupForm__form__btnSubmit} type={'submit'}>
                    {(typePopupForm === 'auth') ? 'Авторизироваться' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>

    )
};

export default PopupForm;
