"use client"
import React, {FC, useCallback, useEffect, useState} from 'react';
import styles from './MyDropzoneImages.module.scss';
import {useDropzone} from "react-dropzone";
import classNames from "classnames";
import Image from "next/image";

export interface MyDropzoneImagesProps {

    getImagesNames:  React.Dispatch<React.SetStateAction<string[]>>
}


const MyDropzoneImages: FC<MyDropzoneImagesProps> = ({getImagesNames}) => {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback((acceptedFiles: any) => {
        if (acceptedFiles.length > 10) {
            alert('Превышен лимит загружаемых файлов. Максимум: 10')
        } else {
            setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,})
    const removeFiles = (name: string) => {
        setFiles(files => files.filter((file: any) => file.name !== name))
    }

    useEffect(() => {
        getImagesNames(files)
    }, [files, setFiles])

    const thumbs = files.map((file: any) => (
        <div className={styles.thumb} key={file.name}>
            <div className={styles.thumb__inner}>
                <Image
                    width={200}
                    height={300}
                    src={file.preview}
                    className={styles.thumb__img}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                    }}
                 alt={'image'}/>
            </div>
            <div onClick={() => removeFiles(file.name)} className={styles.thumb__closeIcon}>
                <Image width={20} height={20} src={'/assets/images/closeIconImageUpload.svg'} alt={'icon'}/>
            </div>
        </div>
    ))

    useEffect(() => {
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <>
            <div className={styles.myDropzoneImages} data-testid="MyDropzoneImages" {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    <p className={classNames(styles.myDropzoneImages__dropzone, {
                        [styles.myDropzoneImages__dropzoneActive]: isDragActive
                    })
                    }>Загрузка изображений (нажмите или перетащите)</p>
                }

            </div>
            <aside className={styles.thumb__container}>
                {thumbs}
            </aside>
        </>

    )
};

export default MyDropzoneImages;
