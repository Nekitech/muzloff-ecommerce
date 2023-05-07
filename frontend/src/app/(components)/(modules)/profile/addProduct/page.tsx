"use client"
import React, {FC, useState} from 'react';
import styles from './page.module.scss';
import Profile from "@/app/(components)/(modules)/profile/page";
import MyDropzoneImages from "@/app/(components)/templates/MyDropzoneImages/MyDropzoneImages";
import {useForm} from "react-hook-form";
import {ProductService} from "@/service/product.service";
import {uploadImages} from '@/helpers/uploadImages'

export interface AddProductProps {
}

const AddProduct: FC<AddProductProps> = () => {
    const {register, handleSubmit, watch} = useForm();
    const [images, setImages] = useState<any>([])
    const onSubmit = async (data: any) => {
        if (images.length > 0) {
            console.log(images)
            const input = Object.assign(data, {
                images: images.map((file: any) => file.path)
            });
             await ProductService.addProduct(input);
            await uploadImages(images);

        }
    };
    const type_instrumentState = watch("type_instrument");

    return (
        <div className={styles.addProduct} data-testid="AddProduct">
            <Profile>
                <form className={styles.addProduct__form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.addProduct__fields}>

                        <div className={styles.addProduct__form__block}>
                            <label htmlFor="">Название: </label>
                            <input className={styles.addProduct__form__input} type="text"
                                   placeholder={'Введите название: '} {...register("name")}/>
                        </div>

                        <div className={styles.addProduct__form__block}>
                            <label htmlFor="">Тип инструмента</label>
                            <select {...register("type_instrument")}>
                                <option value={'Струнные'}>Струнные</option>
                                <option value={'Духовые'}>Духовые</option>
                            </select>
                        </div>

                        <div className={styles.addProduct__form__block}>
                            <label htmlFor="">Тип товара</label>
                            {
                                type_instrumentState === 'Струнные' && <select {...register("type_product")}>
                                    <option>Классические гитары</option>
                                    <option>Акустические гитары</option>
                                    <option>Акустические бас-гитары</option>
                                    <option>Электрогитары</option>
                                </select>
                            }
                            {
                                type_instrumentState === 'Духовые' && <select {...register("type_product")}>
                                    <option>Блок-флейты</option>
                                    <option>Флейты</option>
                                    <option>Саксофоны</option>
                                </select>
                            }
                        </div>

                        <div className={styles.addProduct__form__block}>
                            <label htmlFor="">Установите цену: </label>
                            <input className={styles.addProduct__form__input} type="text"
                                   placeholder={'00.00 руб.'} {...register("cost")}/>
                        </div>

                        <div className={styles.addProduct__form__block}>
                            <label htmlFor="">Бренд: </label>
                            <input className={styles.addProduct__form__input} type="text"
                                   placeholder={'Введите бренд: '} {...register("brand")}/>
                        </div>
                    </div>

                    <MyDropzoneImages getImagesNames={setImages}/>
                    <button type={'submit'} className={''}>Добавить товар</button>
                </form>
            </Profile>
        </div>

    )
};

export default AddProduct;
