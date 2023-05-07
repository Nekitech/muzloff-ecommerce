import React, {FC} from 'react';
import styles from './DropdownCheckboxColor.module.scss';

export interface DropdownCheckboxColorProps {
}

const DropdownCheckboxColor: FC<DropdownCheckboxColorProps> = () => {
    return (
        <div className={styles.dropdownCheckboxColor} data-testid="DropdownCheckboxColor">
            DropdownCheckboxColor Component
        </div>

    )
};

export default DropdownCheckboxColor;
