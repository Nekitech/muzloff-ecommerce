import React, {FC, useState} from 'react';
import styles from './DropdownCheckbox.module.scss';
import Image from "next/image";
import classNames from "classnames";

export interface DropdownCheckboxProps {
    nameDropdown: string,
    listParameters: string[]
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = ({nameDropdown, listParameters}) => {
        const [isActive, setIsActive] = useState(true);
        return (
            <div className={styles.dropdownCheckbox} data-testid="DropdownCheckbox">
                <div className={styles.dropdownCheckbox__header} onClick={() => {
                    setIsActive(!isActive)
                }}>
                    <h3 className={styles.dropdownCheckbox__header__title}>{nameDropdown}</h3>
                    <Image className={classNames(styles.dropdownCheckbox__header__icon, {
                        [styles.dropdownCheckbox__activeDropdownIcon]: isActive
                    })}
                           width={12} height={6} src={'/assets/images/arrowDropdown.svg'} alt={'icon'}/>
                </div>
                <div className={classNames(styles.dropdownCheckbox__body, {
                    [styles.dropdownCheckbox__activeDropdownBody]: isActive
                })}>
                    <ul className={styles.dropdownCheckbox__body__list}>
                        {
                            listParameters?.map((param, ix) => {
                                return (
                                    <li key={ix} className={styles.dropdownCheckbox__body__listItem}>
                                        <input className={styles.dropdownCheckbox__body__listItem__customCheckbox}
                                               type="checkbox" id={param + ix}/>
                                        <label htmlFor={param + ix}>{param}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        )
    }
;

export default DropdownCheckbox;
