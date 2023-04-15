import React, {FC} from 'react';
import styles from './Search.module.scss';
import Image from "next/image";

export interface SearchProps {
}

const Search: FC<SearchProps> = () => {
    return (
        <div className={styles.search} data-testid="TemplateName">
            <input placeholder={'Поиск по сайту'} className={styles.search__input} type="text"/>
            <Image width={12} height={14} src={'assets/images/иконка поиска.svg'} alt={'icon'}/>
        </div>

    )
};

export default Search;
