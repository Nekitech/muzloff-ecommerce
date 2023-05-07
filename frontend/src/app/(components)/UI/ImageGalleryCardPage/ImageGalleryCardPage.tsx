import React, {FC} from 'react';
import styles from './ImageGalleryCardPage.module.scss';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import '../../../styles/ImageGallery.scss'
import {urlServer} from "@/apollo/ApolloClient";

export interface ImageGalleryProps {
    listImages: string[] | undefined
}

const ImageGalleryCardPage: FC<ImageGalleryProps> = ({listImages}) => {
    const uploadUrl = `${urlServer}/uploads/`;

    const items = listImages?.map((name: string) => {
        return {
            original: uploadUrl + name,
            thumbnail: uploadUrl + name,
        }
    }) as ReactImageGalleryItem[];

    return (
        <div className={styles.imageGalleryCardPage}>

            <ImageGallery items={items || []}
                          thumbnailPosition={'left'}
                          showNav={true}
                          showBullets={false}
                          showFullscreenButton={false}
                          autoPlay={false}
                          showPlayButton={false}
                          slideDuration={500}
                          infinite={false}
                          useTranslate3D={false}
                          showIndex={true}
                          showThumbnails={false}

            />
        </div>


    )
};

export default ImageGalleryCardPage;
